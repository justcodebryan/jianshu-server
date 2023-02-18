import type { IArticleSchema } from '@/types/article'
import type { Model, Schema } from 'mongoose'
import mongoose from 'mongoose'

const ArticleSchema: Schema<IArticleSchema> = new mongoose.Schema({
  title: String,
  abstract: String,
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
})

const Article: Model<IArticleSchema> = mongoose.model<IArticleSchema>('Article', ArticleSchema)

export default Article
