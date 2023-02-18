import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  avatar_source: String,
  id: Number,
  is_following_user: Boolean,
  nickname: String,
  slug: String,
  total_likes_count: Number,
  total_wordage: Number,
})

const User = mongoose.model('User', UserSchema)

export default User
