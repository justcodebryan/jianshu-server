import ArticleController from '@/controllers/article'
import Router from 'koa-router'

const router = new Router({
  prefix: '/articles',
})

router.get('/', ArticleController.getArticleList)
router.get('/:id', ArticleController.getArticle)
router.post('/', ArticleController.addArticle)
router.put('/:id', ArticleController.updateArticle)
router.delete('/:id', ArticleController.deleteArticle)

export default router
