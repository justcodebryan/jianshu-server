import ArticleController from '@/controllers/article'
import Router from 'koa-router'

const router = new Router({
  prefix: '/articles',
})

router.get('/', ArticleController.getArticleList)

export default router
