import { QueryResolvers } from '@/generated/graphql'
import { getSelectedFields } from '@/utils/graphql'

export const Query: QueryResolvers = {
  user: async (_root, { where }, ctx, info) => {
    const fields = getSelectedFields(info)
    const res = await ctx.client.query({
      users_by_pk: [{ id: where.id }, fields.user]
    })
    return res.data?.users_by_pk ?? null
  },
  users: async (_root, _args, ctx, info) => {
    const fields = getSelectedFields(info)
    const res = await ctx.client.query(fields)
    return res.data?.users || []
  },
  todo: async (_root, { where }, ctx, info) => {
    const fields = getSelectedFields(info)
    const res = await ctx.client.query({
      todos_by_pk: [{ id: where.id }, fields.todo]
    })
    return res.data?.todos_by_pk ?? null
  },
  todos: async (_root, _args, ctx, info) => {
    const fields = getSelectedFields(info)
    const res = await ctx.client.query(fields)
    return res.data?.todos || []
  },
}
