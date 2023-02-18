import Article from '@/models/article'
import type { IArticleSchema } from '@/types/article'

class ArticleService {
  async getArticleList() {
    const articles: IArticleSchema[] = await Article.find().populate('user')
    return articles
  }

  async getArticle(id: string) {
    const article: IArticleSchema | null = await Article.findById(id)
    if (!article) {
      throw new Error()
    }
    return article
  }

  async updateArticle(id: string, data: IArticleSchema) {
    const article: IArticleSchema | null = await Article.findByIdAndUpdate(id, data, { new: true })
    if (!article) {
      throw new Error()
    }
    return article
  }

  async addArticle(data: IArticleSchema) {
    const article: IArticleSchema = await Article.create(data)
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
