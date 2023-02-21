import Article from '@/models/article'
import type { ArticleRequestParams, IArticleSchema } from '@/types/article'

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/utils/constants'

const defaultArticle: ArticleRequestParams = {
  title: '',
  abstract: '',
  content: '',
  comments_size: 0,
  likes_count: 0,
  view_count: 0,
}

class ArticleService {
  async getArticleList(page: number = DEFAULT_PAGE, pageSize: number = DEFAULT_PAGE_SIZE, userId?: string) {
    const skip = (page - 1) * pageSize
    const total: number = await Article.countDocuments()
    const query = userId ? { user: userId } : undefined
    const articles: IArticleSchema[] = await Article.find(query).populate('user').skip(skip).limit(pageSize)
    return {
      items: articles,
      total,
    }
  }

  async getArticle(id: string) {
    const article: IArticleSchema | null = await Article.findById(id)
    if (!article) {
      throw new Error()
    }
    return article
  }

  async updateArticle(id: string, data: ArticleRequestParams) {
    const article: IArticleSchema | null = await Article.findByIdAndUpdate(
      id,
      {
        ...data,
      },
      { new: true }
    )
    if (!article) {
      throw new Error()
    }
    return article
  }

  async addArticle(data: ArticleRequestParams) {
    const article: IArticleSchema = await Article.create({
      ...defaultArticle,
      ...data,
    })
    if (!article) {
      throw new Error()
    }
    return article
  }

  async deleteArticle(id: string) {
    const article: IArticleSchema | null = await Article.findByIdAndDelete(id)
    if (!article) {
      throw new Error()
    }
  }
}

export default new ArticleService()
