import { Router } from 'express'
import { PostController } from '@/controllers/post.controller'

export const createPostRouter = (postController: PostController): Router => {
  const router = Router()

  router.get('/', postController.getPosts)
  router.get('/:id', postController.getPost)
  router.post('/', postController.create)
  router.put('/:id', postController.replace)
  router.patch('/:id', postController.update)
  router.delete('/:id', postController.delete)

  return router
}
