import type { IUserModel, IUserSchema } from '@/types/user'
import type { Schema } from 'mongoose'
import mongoose from 'mongoose'

const UserSchema: Schema<IUserSchema> = new mongoose.Schema({
  avatar_source: String,
  is_following_user: Boolean,
  nickname: String,
  slug: String,
  total_likes_count: Number,
  total_wordage: Number,
})

const User: IUserModel = mongoose.model<IUserSchema>('User', UserSchema)

export default User
