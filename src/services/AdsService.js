import { api } from "./AxiosService"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { Ad } from "../models/Ad"

class AdsService {

  async getAds() {
    const response = await api.get('api/ads')
    logger.log('getting ads', response.data)
    AppState.ads = response.data.map(ad => new Ad(ad))
  }

}

export const adsService = new AdsService()