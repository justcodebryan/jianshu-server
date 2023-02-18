import { loadSubRouterList } from '@/utils/api'
import Router from 'koa-router'

import userRouter from './users'

const router = new Router({
  prefix: '/v1',
})

const subRouterList = [userRouter]

loadSubRouterList(router, subRouterList)

export default router
