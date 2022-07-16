import { createServer } from '@graphql-yoga/node'
import express from 'express'
import { addUser, deleteUser, getUserById, getUsers } from "./db";

export function buildApp(app: ReturnType<typeof express>) {
  const graphQLServer = createServer({
    schema: {
      typeDefs: /* GraphQL */ `
          type User {
              id: Int!
              name: String!
              age: Int!
              gender: Gender!
              favorites: FavoriteResult
          }

          union FavoriteResult = Movie | Series

          interface Favorite {
              id: ID!
              title: String!
              description: String
              genres: [String!]
              mediaType: String!
          }

          type Movie implements Favorite {
              id: ID!
              title: String!
              description: String
              genres: [String!]
              mediaType: String!
              duration: Int!
              directors: [String!]
          }

          type Series implements Favorite {
              id: ID!
              title: String!
              description: String
              genres: [String!]
              mediaType: String!
              startYear: String!
              endYear: String!
              totalSeasons: Int!
          }

          enum Gender {
              MALE
              FEMALE
              TRANSGENDER
              CISGENDER
              NON BINARY
              NO ANSWER
          }

          type Query {
              hello: String
              users: [User]!
              user(id: ID!): User
              favorites: [FavoriteResult]!
          }

          type Mutation {
              #    addUser:
              deleteUser(id: ID!): String
          }
      `,
      resolvers: {
        Query: {
          hello: () => 'world',
          users: () => getUsers(),
          user: ( _, { id }: {id: number}) => getUserById(id),
        },
        Mutation: {
          // addUser: (_, {name, age, gender, favorite}) => addUser(name, age, gender, favorite),
          deleteUser: (_, {id}: {id: number}) => deleteUser(id),
        }
      },
    },
    logging: false,
  })

  app.use('/graphql', graphQLServer)

  return app
}