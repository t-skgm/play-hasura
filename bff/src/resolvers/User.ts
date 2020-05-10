import { UserResolvers } from '@/generated/graphql'
import { getSelectedFields } from '@/utils/getSelectedFields'

export const User: UserResolvers = {
  todos: async (parent, _args, ctx, info) => {
    const fields = getSelectedFields(info)
    const res = await ctx.client.query({
      todos: [{
        where: {
          user_id: { _eq: parent.id }
        }
      }, fields.todos]
    })
    return res.data?.todos || []
  },
}
