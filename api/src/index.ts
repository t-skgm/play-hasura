import express from 'express'
import { createClient } from './hasuraClient/createClient'
import { createFetcher } from './utils/createFetcher'

const PORT = 3000
const endpoint = 'http://localhost:8080/v1/graphql'

const main = async () => {
  const app = express()
  const client = createClient({ fetcher: createFetcher(endpoint) })

  app.get('/', async (req, res) => {
    try {
      const todos = await client.query({
        todos: {
          id: true,
          title: true,
          completedAt: true,
          created_at: true,
          updated_at: true,
        }
      })

      if (todos.data) {
        return res.status(200).json(todos.data.todos)
      }
    } catch (error) {
      return res.status(401).json({
        message: error.message
      })
    }
  })

  app.listen(PORT, () => {
    console.log(`Start listening to port ${PORT}
http://localhost:${PORT}`)
  })
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
