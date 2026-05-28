import type { Request, Response } from 'express'

import type { PostServiceInterface } from '@/services/post.service.interface'
import type { Post } from '@/types'

export class PostController {
  constructor(private readonly postService: PostServiceInterface) {}

  getPosts = async (req: Request, res: Response) => {
    const posts = await this.postService.getPosts()
    res.status(200).json(posts)
  }

  getPost = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id)
      const post = await this.postService.getPostById(id)

      if (!post) {
        res.status(404).json({ message: 'Post not found' })
        return
      }

      res.status(200).json(post)
    } catch (error: unknown) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  create = async (req: Request, res: Response) => {
    try {
      const { userId, title, body } = req.body as Post
      const newPost = await this.postService.create({ userId, title, body })
      res.status(201).json(newPost)
    } catch (error: unknown) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  replace = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id)
      const { userId, title, body } = req.body as Post
      const updatedPost = await this.postService.replace(id, { userId, title, body })

      if (!updatedPost) {
        res.status(404).json({ message: 'Post not found' })
        return
      }

      res.status(200).json(updatedPost)
    } catch (error: unknown) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id)
      const { userId, title, body } = req.body as Post
      const updatedPost = await this.postService.update(id, { userId, title, body })

      if (!updatedPost) {
        res.status(404).json({ message: 'Post not found' })
        return
      }

      res.status(200).json(updatedPost)
    } catch (error: unknown) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id)
      await this.postService.delete(id)
      res.status(204).send()
    } catch (error: unknown) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
