import { api } from "./AxiosService"

class AdsService {

  async getAds() {
    const response = await api.get('api/ads')
  }

}

export const adsService = new AdsService()