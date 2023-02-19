import UserService from '@/services/user'
import type { UserRequestData } from '@/types/user'
import resolver from '@/utils/resolver'
import type { Context } from 'koa'

class UserController {
  async getUserList(ctx: Context) {
    const {
      request: { query },
    } = ctx

    const page = query.page ? parseInt(query.page as string) : 1
    const pageSize = query.pageSize ? parseInt(query.page as string) : 1
    const res = await UserService.getUserList(page, pageSize)

    ctx.body = resolver.success(res)
  }

  async getUser(ctx: Context) {
    const {
      request: { query },
    } = ctx

    const { id } = query

    const res = await UserService.getUserInfo(id as string)

    ctx.body = resolver.success(res)
  }

  async addUser(ctx: Context) {
    const {
      request: { body },
    } = ctx

    const data = body as UserRequestData

    const res = await UserService.addUser(data)

    ctx.body = resolver.success(res)
  }
}

export default new UserController()
