import UserController from '@/controllers/user'
import Router from 'koa-router'

const router = new Router({
  prefix: '/users',
})

router.get('/', UserController.getUserList)
router.get('/:id', UserController.getUser)
router.post('/', UserController.addUser)
router.put('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)

export default router
