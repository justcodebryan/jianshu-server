import UserService from '@/services/user'
import resolver from '@/utils/resolver'
import type { Context } from 'koa'

class ArticleController {
  async getArticleList(ctx: Context) {
    const {
      request: { query },
    } = ctx

    const res = await UserService.getUserList()

    ctx.body = resolver.success(res)
  }
}

export default new ArticleController()
