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
import { RouterLink } from 'vue-router';
import { profilesService } from '../services/ProfilesService';

export default {
  setup() {
    const route = useRoute()

    return {
      profile: computed(() => AppState.profile),
      route,
    };
  },

};
</script>


<style lang="scss" scoped></style>
