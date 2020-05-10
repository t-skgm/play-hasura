import { Resolvers } from '@/generated/graphql'
import { Query } from './Query'
import { User } from './User'
import { Todo } from './Todo'

export const resolvers: Resolvers = {
  Query,
  User,
  Todo
}
