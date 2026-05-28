import { Router } from 'express'
import { PostController } from '@/controllers/post.controller'

export const createPostRouter = (postController: PostController): Router => {
  const router = Router()

  router.get('/posts', postController.getPosts)
  router.get('/posts/:id', postController.getPost)
  router.post('/posts', postController.create)
  router.put('/posts/:id', postController.replace)
  router.patch('/posts/:id', postController.update)
  router.delete('/posts/:id', postController.delete)

  return router
}
