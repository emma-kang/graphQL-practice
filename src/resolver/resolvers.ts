import { addUser, deleteUser, getUserById, getUsers } from "./db";
import { UserType } from "./types";

export const resolvers = {
  Query: {
    hello: () => 'world',
    users: () => getUsers(),
    user: (_: any, { id }: {id: number}) => getUserById(id),
  },
  Mutation: {
    addUser: (_: any, {user} : {user: UserType}) => addUser(user),
    deleteUser: (_: any, {id}: {id: number}) => deleteUser(id),
  }
}