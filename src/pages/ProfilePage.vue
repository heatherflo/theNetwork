<template>
  <div class="ProfilePage" v-if="profile">
    <div>
      hello

      <img class="profile-picture" :src="profile.picture" :alt="profile.name">


    </div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted, watch } from 'vue';
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';
import { profilesService } from '../services/ProfilesService';

export default {
  setup() {
    const route = useRoute()

    async function getProfile() {
      try {
        const profileId = route.params.profileId;
        await profilesService.getProfile(profileId)
      } catch (error) {
        Pop.error(error)
      }
    };
    onMounted(() => {
      getProfile()
    })

    return {
      getProfile,
      profile: computed(() => AppState.profile),
      route,
    };
  },

};
</script>


<style lang="scss" scoped></style>
