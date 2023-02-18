import User from '@/models/user'
import type { IUserSchema } from '@/types/user'

class UserService {
  async getUserList() {
    const users: IUserSchema[] = await User.find()
    if (!users) {
      throw new Error()
    }
    return users
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

  async addUser(data: IUserSchema) {
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
