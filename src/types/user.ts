import type { Document, Model } from 'mongoose'

export interface IUserSchema extends Document {
  avatar_source?: string
  id: number
  is_following_user?: boolean
  nickname?: string
  slug?: string
  total_likes_count?: number
  total_wordage?: number
}

export type IUserModel = Model<IUserSchema>
