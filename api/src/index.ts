import { ApolloServer } from 'apollo-server'
import { IResolvers } from 'graphql-tools';
import { imporTypeDefs } from '@/schema'
import { resolvers } from '@/resolvers'
import { Context } from '@/types'
import { createClient } from '@/generated/hasuraClient/createClient'
import { createFetcher } from '@/utils/createFetcher'

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
const endpoint = 'http://localhost:8080/v1/graphql'

const main = async () => {
  const client = createClient({ fetcher: createFetcher(endpoint) })

  const server = new ApolloServer({
    typeDefs: imporTypeDefs(),
    resolvers: resolvers as IResolvers,
    playground: true,
    introspection: true,
    context: (): Context => ({
      client
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
