class UserService {
  async getUserInfo(userIds: string[]) {
    return new Promise<string[]>((resolve, reject) => {
      console.log(userIds)
    })
  }
}

export default new UserService()
