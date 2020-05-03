import { createClient } from '@/hasuraClient/createClient'

export type Context = {
  db: ReturnType<typeof createClient>
}
