import { TodoResolvers } from '@/generated/graphql'
import { getSelectedFields } from '@/utils/getSelectedFields'

export const Todo: TodoResolvers = {
  user: async (parent, _args, ctx, info) => {
    const fields = getSelectedFields(info)
    const res = await ctx.client.query({
      users_by_pk: [{
        id: parent.user?.id
      }, fields.user]
    })
    return res.data?.users_by_pk ?? null
  },
}
