import type mongoose from 'mongoose'
import type { Document, Model } from 'mongoose'

export interface IArticleSchema extends Document {
  title: string
  abstract: string
  content: string
  user: mongoose.Types.ObjectId
}

export type IArticleModel = Model<IArticleSchema>
