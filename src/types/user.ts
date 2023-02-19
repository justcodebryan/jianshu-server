import type { Document, Model } from 'mongoose'

export interface UserOptionalParams {
  is_following_user?: boolean
  slug?: string
  total_likes_count?: number
  total_wordage?: number
  avatar_source?: string
}

export interface UserRequiredParams {
  nickname: string
}

export type UserRequestData = UserRequiredParams & Partial<UserOptionalParams>

export type IUserSchema = Document & UserRequiredParams & Partial<UserOptionalParams>

export type IUserModel = Model<IUserSchema>
