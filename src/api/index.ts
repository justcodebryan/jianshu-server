import type { Context, EmptyObject } from '@/types/base'
import UserController from '@/controllers/user'
import Router from 'koa-router'

const rootRouter = new Router<EmptyObject, Context>({
  prefix: '/api/v1',
})

// const subRouterList = [routerV1]

// loadSubRouterList(rootRouter, subRouterList)

rootRouter.get('/users/', UserController.getUserList)
rootRouter.get('/users/:id', UserController.getUser)
rootRouter.post('/users', UserController.addUser)
rootRouter.put('/users/:id', UserController.updateUser)
rootRouter.delete('/users/:id', UserController.deleteUser)

export default rootRouter
