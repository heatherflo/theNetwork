
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { Post } from '../models/Post.js'

class PostsService {

  async getPosts() {
    const response = await api.get('api/posts')
    logger.log('getting posts', response.data)
    AppState.posts = response.data.posts.map(post => new Post(post))
    // const newPost = new Post(response.data)
    // AppState.posts = newPost
  }

}

export const postsService = new PostsService()