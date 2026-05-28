import data from '../../data/posts.json'

import type { PostRepositoryInterface } from '@/repositories/post.repository.interface'
import type { Post } from '@/types'

export class PostRepository implements PostRepositoryInterface {
  getAllPost = async (): Promise<Post[]> => {
    return data
  }

  getPostById = async (id: number): Promise<Post | null> => {
    const post = data.find((post) => post.id === id)
    return post || null
  }

  createPost = async (values: Pick<Post, 'userId' | 'title' | 'body'>): Promise<Post> => {
    const newPost: Post = {
      id: data.length + 1,
      userId: values.userId,
      title: values.title,
      body: values.body,
    }
    data.push(newPost)
    return newPost
  }

  replacePost = async (id: number, values: Pick<Post, 'userId' | 'title' | 'body'>): Promise<Post> => {
    const post = data.find((post) => post.id === id)

    if (!post) {
      throw new Error('Post not found')
    }

    const replacedPost: Post = { id, ...values }
    Object.assign(post, replacedPost)
    return replacedPost
  }

  updatePost = async (id: number, values: Partial<Pick<Post, 'userId' | 'title' | 'body'>>): Promise<Post> => {
    const post = data.find((post) => post.id === id)

    if (!post) {
      throw new Error('Post not found')
    }

    const updatedPost = { ...post, ...values }
    Object.assign(post, updatedPost)
    return updatedPost
  }

  deletePost = async (id: number): Promise<void> => {
    const index = data.findIndex((post) => post.id === id)

    if (index === -1) {
      throw new Error('Post not found')
    }

    data.splice(index, 1)
  }
}
