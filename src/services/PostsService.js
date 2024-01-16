
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { Post } from '../models/Post.js'

class PostsService {

  async getPosts() {
    const response = await api.get('api/posts')
    logger.log('getting posts', response.data)
    AppState.posts = response.data.posts.map(post => new Post(post))
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages

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

  async getProfilePostsPages(profileId, pageNumber) {
    logger.log('changing profile page')
    const response = await api.get(`api/profiles/${profileId}/posts?page=${pageNumber}`);
    logger.log('changing page from api', response.data)
    AppState.profilePosts = response.data.posts.map(post => new Post(post))
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages

  }


  async deletePost(postId) {
    const response = await api.delete(`api/posts/${postId}`)
    const indexToRemove = AppState.posts.findIndex(post => post.id == postId)
    AppState.posts.splice(indexToRemove, 1)
  }

  async deletePostProfilePage(postId) {
    const response = await api.delete(`api/posts/${postId}`)
    const indexToRemove = AppState.posts.findIndex(post => post.id == postId)
    AppState.posts.splice(indexToRemove, 1)
  }

  async getPostById(profileId) {
    logger.log('are we getting this?')
    const response = await api.get(`api/posts?creatorId=${profileId}`)
    console.log('getting post by id in service ', response.data)
    const newProfilePosts = response.data.posts.map(profilePost => new Post(profilePost))
    AppState.profilePosts = newProfilePosts
  }


  clearAppState() {
    AppState.activeProfile = null
    AppState.profilePosts = []
  }

  async searchPosts(searchTerm) {
    console.log('trying to get search')
    const response = await api.get(`api/posts?query=${searchTerm}`)
    console.log('searching posts', response.data)
    AppState.searchedTerm = searchTerm
    AppState.posts = response.data.posts.map(post => new Post(post))
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }

  async likePost(postId) {
    logger.log('liking post from service')
    const response = api.get(`api/${postId}/like`)
    logger.log('is this like working?', response.data)
  }

}

export const postsService = new PostsService()