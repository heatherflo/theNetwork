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
    <!-- <div v-if="account.id && !account.github">no github</div> -->

    <!-- this works ⬇️ -->
    <div v-if="account.id && account.github"><i class="mdi mdi-github"></i></div>
    <div v-if="account.id && account.linkedin"><i class="mdi mdi-linkedin"></i></div>
    <div v-if="account.id && account.resume"><i class="mdi mdi-file-account"></i></div>

  </div>



  <!-- <Socials /> -->
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted, watch } from 'vue';
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';
import { profilesService } from '../services/ProfilesService';
import Socials from './Socials.vue';

export default {
  setup() {
    const route = useRoute()
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

      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile)

    };
  },

  components: { RouterLink, Socials }
};
</script>


<style lang="scss" scoped></style>