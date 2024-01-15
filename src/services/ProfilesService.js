import { api } from "./AxiosService"
import { logger } from "../utils/Logger"
import { Profile } from "../models/Profile.js"
import { AppState } from "../AppState"


class ProfilesService {

  async getProfileById(profileId) {
    const response = await api.get(`api/profiles/${profileId}`)
    logger.log('getting profile by Id', response.data)
    const newProfile = new Profile(response.data)
    AppState.activeProfile = newProfile
  }



}
export const profilesService = new ProfilesService()