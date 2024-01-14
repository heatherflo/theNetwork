<template>
  <div class="AccountBar sticky-top background m-1 p-4">
    <div v-if="account.id">
      <p class="fs-3 text-center">
        hello {{ account.name }}
      </p>
      <div class="text-center profileImg">
        <img :src="account.picture" :alt="account.name">
      </div>
    </div>
    <div class="text-center fs-2" v-else="!account">
      Please Login
    </div>


    <!-- this works ⬇️ -->
    <div class="text-center mt-2" v-if="account.id && !account.graduated">Codeworks<i><i
          class="fs-2 mdi mdi-school"></i></i>
    </div>
    <div class="fs-2 text-center">
      <div v-if="account.id && !account.github"><i class="mdi mdi-github"></i></div>
      <div v-if="account.id && !account.linkedin"><i class="mdi mdi-linkedin"></i></div>
      <div v-if="account.id && !account.resume"><i class="mdi mdi-file-account"></i></div>
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


      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile)

    };
  },

  components: { RouterLink, }
};
</script>


<style lang="scss" scoped>
.background {
  background-color: #17a3b860;
  height: 100vh;
}

.profileImg {
  height: 20vh;
  width: 20vh;
  border-radius: 50%;
}
</style>