
import { logger } from 
import { api } from "./AxiosService"

class PostsService {

  async getPosts() {
    const response = await api.get('api/posts')
    logger.log()
  }

}

export const postsService = new PostsService()