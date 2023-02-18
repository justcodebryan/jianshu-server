import { loadSubRouterList } from '@/utils/api'
import Router from 'koa-router'

import userRouter from './users'
import articleRouter from './articles'

const router = new Router({
  prefix: '/v1',
})

const subRouterList = [userRouter, articleRouter]

loadSubRouterList(router, subRouterList)

export default router
