<template>
  <div class="AccountBar sticky-top">
    <div v-if="account.id">
      <p>
        hello {{ account.name }}
      </p>
      <!-- <RouterLink :to="{ name: 'Profile', params: { profileId: profile.id } }">
        <img class="profile-picture" :src="profile.picture" :alt="profile.name">
      </RouterLink> -->
      <img :src="account.picture" :alt="account.name">
    </div>
    <div v-else="!account">
      please log in to see account
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
    // async function getProfile() {
    //   try {
    //     await profilesService.getProfile()
    //   } catch (error) {
    //     Pop.error(error)
    //   }
    // }
    // onMounted(() => {
    //   getProfile()
    // })

    return {
      // getProfile,
      // profile: computed(() => AppState.profile),
      account: computed(() => AppState.account)

    };
  },

  components: { RouterLink }
};
</script>


<style lang="scss" scoped></style>