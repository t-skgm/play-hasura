// import express from 'express'
import { createClient } from '@/hasuraClient/createClient'
import { createFetcher } from '@/utils/createFetcher'
import { ApolloServer, gql } from 'apollo-server'

const PORT = 3000
const endpoint = 'http://localhost:8080/v1/graphql'

const typeDefs = gql`
  scalar DateTime

  type Query {
    user: User
    users: [User!]!
    todo: Todo
    todos: [Todo!]!
  }

  type Todo {
    id: ID!
    title: String!
    completedAt: DateTime

    created_at: DateTime
    updated_at: DateTime

    user: User
  }

  type User {
    id: ID!
    name: String!
    created_at: DateTime
    updated_at: DateTime

    todos: [Todo!]!
  }
`;

const resolvers = {
  Query: {
    user: () => {},
    users: () => {},
    todo: () => {},
    todos: () => {},
  },
};

const main = async () => {
  // const app = express()
  // app.get('/', async (req, res) => {
  //   try {
  //     const todos = await client.query({
  //       todos: {
  //         id: true,
  //         title: true,
  //         completedAt: true,
  //         created_at: true,
  //         updated_at: true,
  //       }
  //     })

  //     if (todos.data) {
  //       return res.status(200).json(todos.data.todos)
  //     }
  //   } catch (error) {
  //     return res.status(401).json({
  //       message: error.message
  //     })
  //   }
  // })

  const db = createClient({ fetcher: createFetcher(endpoint) })

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
    context: ({ req, res }) => ({
      db
    })
  })

  server.listen(PORT).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
