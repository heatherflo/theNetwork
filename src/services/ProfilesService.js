import { api } from "./AxiosService"
import { logger } from "../utils/Logger"
import { Profile } from "../models.Profile.js"


class ProfilesService {

  async getProfile(profileId) {
    const response = await api.get(`api/profile/${profileId}`)
    logger.log('getting profile', response.data)
    const newProfile = new Profile(response.data)
    AppState.profile = newProfile
  }

  // async getProfileById(profileId) {
  //   const response = await api.get(`api/profiles/${profileId}`)
  //   logger.log('getting profiles by Id', response.data)
  // }

}
export const profilesService = new ProfilesService()