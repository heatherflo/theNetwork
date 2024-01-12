<template>
  <div class="ProfilePage" v-if="profile">
    <div>
      hello
      <RouterLink :to="{ name: 'Profile', params: { profileId: profile.id } }">
        <img class="profile-picture" :src="profile.picture" :alt="profile.name">
      </RouterLink>

    </div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted, watch } from 'vue';
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';
import { profilesService } from '../services/ProfilesService';

export default {
  setup() {
    // const route = useRoute()
    // const watchableProfileId = computed(() => route.params.profileId)

    // async function getProfileById() {
    //   const profileId = route.params.profileId
    //   await profilesService.getProfileById(profileId);
    // };

    // watch(
    //   watchableProfileId,
    //   () => {

    //   getProfileById();
    // },
    // { immediate: true })
    return {
      profile: computed(() => AppState.profile),

    };
  },

  components: { RouterLink }
};
</script>


<style lang="scss" scoped></style>
