<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-info px-3">
    <router-link class="navbar-brand d-flex align-items-center" :to="{ name: 'Home' }">
      <div class="d-flex">
        <i class=" fs-1 mdi mdi-server-network-outline"></i>
      </div>
      <div class="ps-2 text-white">the</div>
      <RouterLink :to="{ name: 'Home' }">
        <div class="text-white">NETWORK</div>
      </RouterLink>
    </router-link>

    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <!-- <router-link :to="{ name: 'Profile', params: { profileId: account.id } }" class="text-light btn text-lowercase">
            Profile
          </router-link> -->
          Profile
        </li>
      </ul>

      <SearchBar />
      <Login />
    </div>
  </nav>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
import { AppState } from '../AppState';
import { RouterLink } from 'vue-router';
import SearchBar from './SearchBar.vue'
import { Profile } from '../models/Profile';

export default {
  props: { profile: { type: Profile, required: true } },
  setup() {

    const theme = ref(loadState('theme') || 'light')




    return {
      theme,
      profile: computed(() => AppState.profile),
      account: computed(() => AppState.account),

      toggleTheme() {
        theme.value = theme.value == 'light' ? 'dark' : 'light'
        document.documentElement.setAttribute('data-bs-theme', theme.value)
        saveState('theme', theme.value)
      }
    }
  },
  components: { Login, RouterLink, SearchBar }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}



.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
