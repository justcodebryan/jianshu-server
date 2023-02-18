import UserService from '@/services/user'
import resolver from '@/utils/resolver'
import type { Context } from 'koa'

class UserController {
  async getUserList(ctx: Context) {
    const {
      request: { query },
    } = ctx

    const res = await UserService.getUserList()

    ctx.body = resolver.success(res)
  }
}

export default new UserController()
