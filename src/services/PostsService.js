
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
    const response = await api.post('api/posts', postData)
    logger.log('new post', response.data)
    AppState.posts.push(new Post(response.data))
  }

  async changePage(url) {
    const response = await api.get(url)
    logger.log('getting new page', response.data)
    AppState.posts = response.data.posts.map(post => new Post(post))
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }

  async deletePost(postId) {
    const response = await api.delete(`api/posts/${postId}`)
    const indexToRemove = AppState.posts.findIndex(post => post.id == postId)
    AppState.posts.splice(indexToRemove, 1)
  }

  async getPostById(postId) {
    const response = await api.get(`api/posts/${postId}`)
    logger.log('getting post by id', response.data)
    const newProfilePost = new Post(response.data)
    AppState.profilePosts = newProfilePost
  }

  clearAppState() {
    AppState.profile = null
    AppState.profilePosts = []
  }

  async searchPosts(searchTerm) {
    const response = await api.get(`api/posts?query=${searchTerm}`)
    console.log('searching posts', response.data)
    AppState.posts = response.data.map(post => new Post(post))
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }


}

export const postsService = new PostsService()