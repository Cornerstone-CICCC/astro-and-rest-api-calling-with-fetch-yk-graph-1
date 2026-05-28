import express from 'express'
import cors from 'cors'

import { PostRepository } from '@/repositories/post.repository'
import { PostService } from '@/services/post.service'
import { PostController } from '@/controllers/post.controller'
import { createPostRouter } from '@/routes/post.router'

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

const postRepository = new PostRepository()
const postService = new PostService(postRepository)
const postController = new PostController(postService)
const postRouter = createPostRouter(postController)

app.use('/posts', postRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
