import type { Post } from '@/types'

export interface PostRepositoryInterface {
  getAllPost: () => Promise<Post[]>
  getPostById: (id: number) => Promise<Post | null>
  createPost: (values: Pick<Post, 'userId' | 'title' | 'body'>) => Promise<Post>
  replacePost: (id: number, values: Pick<Post, 'userId' | 'title' | 'body'>) => Promise<Post>
  updatePost: (id: number, values: Partial<Pick<Post, 'userId' | 'title' | 'body'>>) => Promise<Post>
  deletePost: (id: number) => Promise<void>
}
