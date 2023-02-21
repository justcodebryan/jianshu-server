import UserService from '@/services/user'
import type { UserRequestParams } from '@/types/user'
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/utils/constants'
import resolver from '@/utils/resolver'
import type { Context } from 'koa'

class UserController {
  async getUserList(ctx: Context) {
    const {
      request: { query },
    } = ctx

    const page = query.page ? parseInt(query.page as string) : DEFAULT_PAGE
    const pageSize = query.pageSize ? parseInt(query.pageSize as string) : DEFAULT_PAGE_SIZE
    const res = await UserService.getUserList(page, pageSize)

    ctx.body = resolver.success(res)
  }

  async getUser(ctx: Context) {
    const { params } = ctx

    const { id } = params

    const res = await UserService.getUser(id as string)

    ctx.body = resolver.success(res)
  }

  async addUser(ctx: Context) {
    const {
      request: { body },
    } = ctx

    const data = body as UserRequestParams

    const res = await UserService.addUser(data)

    ctx.body = resolver.success(res)
  }

  async updateUser(ctx: Context) {
    const {
      request: { body },
      params,
    } = ctx

    const { id } = params
    const data = body as UserRequestParams

    const res = await UserService.updateUser(id, data)
    ctx.body = resolver.success(res)
  }

  async deleteUser(ctx: Context) {
    const { params } = ctx

    const { id } = params

    await UserService.deleteUser(id)

    ctx.body = resolver.success()
  }
}

export default new UserController()
