<template>
  <div class="SearchBar">

    <form @submit.prevent="searchPosts()" class="rounded input-group p-3">
      <label for="searchBar"></label>
      <input v-model="searchTerm" class="form-control" id="searchBar" placeholder="Search Here" name="searchBar"
        type="text" required minlength="2" maxlength="20">
      <button class="btn btn-light "><i class="mdi mdi-magnify"></i></button>
    </form>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { postsService } from '../services/PostsService';
export default {

  setup() {
    const searchTerm = ref('');
    function resetSearchForm() {
      searchTerm.value = '';
    }

    return {
      searched: computed(() => AppState.searchedTerm),

      searchTerm,
      async searchPosts() {
        try {
          // logger.log('newSearch', searchTerm.value)
          await postsService.searchPosts(searchTerm.value);
          resetSearchForm();
        }
        catch (error) {
          Pop.error(error);
        }
      },

    }



  }
};
</script>


<style lang="scss" scoped></style>