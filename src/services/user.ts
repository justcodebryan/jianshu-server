import User from '@/models/user'
import type { IUserSchema, UserRequestParams } from '@/types/user'

const defaultUser: UserRequestParams = {
  nickname: '',
  is_following_user: false,
  slug: '',
  total_likes_count: 0,
  total_wordage: 0,
  avatar_source: '',
}

class UserService {
  async getUserList(page = 1, pageSize = 10) {
    const skip = (page - 1) * pageSize
    const total: number = await User.countDocuments()
    const users: IUserSchema[] = await User.find().skip(skip).limit(pageSize)

    if (!users) {
      throw new Error()
    }
    return {
      items: users,
      total,
    }
  }

  async getUser(id: string) {
    const user: IUserSchema | null = await User.findById(id)
    if (!user) {
      throw new Error()
    }
    return user
  }

  async updateUser(id: string, data: UserRequestParams) {
    const user: IUserSchema | null = await User.findByIdAndUpdate(id, { ...data }, { new: true })
    if (!user) {
      throw new Error()
    }
    return user
  }

  async addUser(data: UserRequestParams) {
    const user: IUserSchema = await User.create({ ...defaultUser, ...data })
    if (!user) {
      throw new Error()
    }
    return user
  }

  async deleteUser(id: string) {
    const user: IUserSchema | null = await User.findByIdAndDelete(id)
    if (!user) {
      throw new Error()
    }
  }
}

export default new UserService()
