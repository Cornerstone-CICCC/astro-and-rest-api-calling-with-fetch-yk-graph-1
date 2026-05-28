import type { Post } from '@/types'

export interface PostServiceInterface {
  getPosts(): Promise<Post[]>
  getPostById(id: number): Promise<Post | null>
  create(values: Pick<Post, 'userId' | 'title' | 'body'>): Promise<Post>
  replace(id: number, values: Pick<Post, 'userId' | 'title' | 'body'>): Promise<Post>
  update(id: number, values: Partial<Pick<Post, 'userId' | 'title' | 'body'>>): Promise<Post>
  delete(id: number): Promise<void>
}
