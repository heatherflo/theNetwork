<template>
  <div class="Socials">
    <div>{{ profile.github }}</div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { profilesService } from '../services/ProfilesService';
export default {
  setup() {


    async function getProfile() {
      try {
        await profilesService.getProfile(profileId)
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      getProfile,
      profile: computed(() => AppState.profile)
    }
  }
};
</script>


<style lang="scss" scoped></style>