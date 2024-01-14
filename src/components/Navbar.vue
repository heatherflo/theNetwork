<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-info px-3">
    <router-link class="navbar-brand d-flex align-items-center" :to="{ name: 'Home' }">
      <div class="">
        <i class=" fs-1 mdi mdi-server-network-outline"></i>
      </div>
      <div class="ps-2">the</div>
      <div>NETWORK</div>
    </router-link>

    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'Profile', params: { profileId: account.id } }"
            class="btn text-light selectable text-lowercase">
            Profile
          </router-link>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->

      <Login />
    </div>
  </nav>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
import { AppState } from '../AppState';
export default {
  setup() {

    const theme = ref(loadState('theme') || 'light')

    onMounted(() => {
      document.documentElement.setAttribute('data-bs-theme', theme.value)
    })

    return {
      theme,
      account: computed(() => AppState.account),
      toggleTheme() {
        theme.value = theme.value == 'light' ? 'dark' : 'light'
        document.documentElement.setAttribute('data-bs-theme', theme.value)
        saveState('theme', theme.value)
      }
    }
  },
  components: { Login }
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
