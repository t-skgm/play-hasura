import { createClient } from '@/generated/hasuraClient/createClient'

export type Context = {
  client: ReturnType<typeof createClient>
}
