import UserService from '@/services/user'
import resolver from '@/utils/resolver'
import { isString } from '@/utils/type'
import type { Context } from 'koa'

class UserController {
  async getUserList(ctx: Context) {
    const res = await UserService.getUserList()

    ctx.body = resolver.success(res)
  }

  async getUser(ctx: Context) {
    const {
      request: { query },
    } = ctx

    const { id } = query

    if (!isString(id)) {
      return (ctx.body = resolver.success())
    }

    const res = await UserService.getUserInfo(id as string)

    ctx.body = resolver.success(res)
  }

  async addUser(ctx: Context) {
    const {
      request: { body },
    } = ctx

    // const { username, pwd } = body

    // const res = await UserService.addUser({
    //   nickname: username,
    // })
  }
}

export default new UserController()
