import type { PostRepositoryInterface } from '@/repositories/post.repository.interface'
import type { PostServiceInterface } from '@/services/post.service.interface'
import type { Post } from '@/types'

export class PostService implements PostServiceInterface {
  constructor(private readonly postRepository: PostRepositoryInterface) {}

  getPosts = async () => {
    return this.postRepository.getAllPost()
  }

  getPostById = async (id: number) => {
    return this.postRepository.getPostById(id)
  }

  create = async (values: Pick<Post, 'userId' | 'title' | 'body'>) => {
    return this.postRepository.createPost(values)
  }

  replace = async (id: number, values: Pick<Post, 'userId' | 'title' | 'body'>) => {
    return this.postRepository.replacePost(id, values)
  }

  update = async (id: number, values: Partial<Pick<Post, 'userId' | 'title' | 'body'>>) => {
    return this.postRepository.updatePost(id, values)
  }

  delete = async (id: number) => {
    return this.postRepository.deletePost(id)
  }
}
