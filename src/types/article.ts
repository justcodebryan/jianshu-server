import type { Document, Model } from 'mongoose'
import type { IUserSchema } from './user'

export interface ArticleOptionalParams {
  abstract?: string
  content?: string
}

export interface ArticleRequiredParams {
  title: string
}

export type ArticleRequestParams = ArticleRequiredParams & Partial<ArticleOptionalParams>

export type IArticleSchema = Document &
  ArticleRequiredParams &
  Partial<ArticleOptionalParams> & {
    user: IUserSchema['_id']
  }

export type IArticleModel = Model<IArticleSchema>
