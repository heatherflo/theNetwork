
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { Post } from '../models/Post.js'

class PostsService {

  async getPosts() {
    const response = await api.get('api/posts')
    logger.log('getting posts', response.data)
    AppState.posts = response.data.posts.map(post => new Post(post))
    // AppState.currentPage = response.data.page
    // AppState.totalPages = response.data.totalPages

  }

  async createPost(postData) {
    const response = await api.put('api/posts', postData)
    logger.log('new post', response.data)
    AppState.posts.push(new Post(post))
  }

  async changePage(url) {
    const response = await api.get(url)
    logger.log('getting new page', response.data)
    AppState.posts = response.data.posts.map(post => new Post(post))
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }




}

export const postsService = new PostsService()