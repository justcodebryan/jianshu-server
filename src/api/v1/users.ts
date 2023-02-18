import * as UserController from '@/controllers/user'
import Router from 'koa-router'

const router = new Router({
  prefix: '/users',
})

router.get('/', UserController.getUserList)

export default router
