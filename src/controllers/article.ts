import ArticleService from '@/services/article'
import type { ArticleRequestParams } from '@/types/article'
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/utils/constants'
import resolver from '@/utils/resolver'
import type { Context } from 'koa'

class ArticleController {
  async getArticleList(ctx: Context) {
    const {
      request: { query },
    } = ctx

    const page = query.page ? parseInt(query.page as string) : DEFAULT_PAGE
    const pageSize = query.pageSize ? parseInt(query.page as string) : DEFAULT_PAGE_SIZE
    const res = await ArticleService.getArticleList(page, pageSize)

    ctx.body = resolver.success(res)
  }

  async getArticle(ctx: Context) {
    const {
      request: { query },
    } = ctx

    const { id } = query

    const res = await ArticleService.getArticle(id as string)

    ctx.body = resolver.success(res)
  }

  async addArticle(ctx: Context) {
    const {
      request: { body },
    } = ctx

    const data = body as ArticleRequestParams

    const res = await ArticleService.addArticle(data)

    ctx.body = resolver.success(res)
  }

  async updateArticle(ctx: Context) {
    const {
      request: { body },
      params,
    } = ctx

    const { id } = params
    const data = body as ArticleRequestParams

    const res = await ArticleService.updateArticle(id, data)
    ctx.body = resolver.success(res)
  }

  async deleteArticle(ctx: Context) {
    const { params } = ctx

    const { id } = params

    await ArticleService.deleteArticle(id)

    ctx.body = resolver.success()
  }
}

export default new ArticleController()
