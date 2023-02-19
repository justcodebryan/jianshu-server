import User from '@/models/user'
import type { IUserSchema, UserRequestData } from '@/types/user'

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

  async getUserInfo(id: string) {
    const user: IUserSchema | null = await User.findById(id)
    if (!user) {
      throw new Error()
    }
    return user
  }

  async updateUserInfo(id: string, data: IUserSchema) {
    const user: IUserSchema | null = await User.findByIdAndUpdate(id, data, { new: true })
    if (!user) {
      throw new Error()
    }
    return user
  }

  async addUser(data: UserRequestData) {
    const user: IUserSchema = await User.create(data)
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
