import { api } from "./AxiosService"
import { logger } from "../utils/Logger"
import { Profile } from "../models/Profile.js"


class ProfilesService {

  async getProfileById(profileId) {
    const response = await api.get(`api/profile/${profileId}`)
    logger.log('getting profile', response.data)
    const newProfile = new Profile(response.data)
    AppState.profile = newProfile
  }



}
export const profilesService = new ProfilesService()