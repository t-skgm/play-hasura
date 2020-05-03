import { ClientOptions } from 'graphql-typed-client'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

type Fetcher = ClientOptions['fetcher']

export const createFetcher = (endpoint: string): Fetcher => ({ query, variables }, fetch, qs) => {
  return fetch(endpoint, { method: 'POST', body: JSON.stringify({ query, variables }), headers }).then((r: any) => r.json())
}
