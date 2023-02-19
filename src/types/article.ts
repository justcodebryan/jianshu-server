import type { Document, Model } from 'mongoose'
import type { IUserSchema } from './user'

export interface IArticleSchema extends Document {
  title: string
  abstract: string
  content: string
  user: IUserSchema['_id']
}

export type IArticleModel = Model<IArticleSchema>
