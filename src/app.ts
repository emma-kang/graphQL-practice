import { join } from 'path'
import { createServer } from '@graphql-yoga/node'
import express from 'express'
import { addResolversToSchema } from "@graphql-tools/schema";
import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { resolvers } from "./resolver/resolvers";

export async function buildApp(app: ReturnType<typeof express>) {
  const schema = await loadSchema(join(__dirname, './schema/schema.graphql'), {
    loaders: [new GraphQLFileLoader()]
  });

  const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers
  });

  const graphQLServer = createServer({
    schema: schemaWithResolvers,
    logging: false,
  })

  app.use('/graphql', graphQLServer)

  return app
}