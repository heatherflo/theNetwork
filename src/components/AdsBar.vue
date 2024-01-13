<template>
  <div class="AdsBar" v-for="ad in ads" :key="ad.id">
    <div>
      <img class="img-fluid mt-3" :src="ad.tall" :alt="ad.title">
    </div>



  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { adsService } from '../services/AdsService';
export default {
  setup() {

    onMounted(() => {
      getAds()
    })
    async function getAds() {
      try {
        await adsService.getAds()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      getAds,
      ads: computed(() => AppState.ads)

    }
  }
};
</script>


<style lang="scss" scoped></style>