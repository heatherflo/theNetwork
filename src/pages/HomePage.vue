<template>
  <div class="container-fluid">


    <section class="row  m-2 justify-content-between">
      <div class="col-2 mt-3">
        <SearchBar />
        <AccountBar />
      </div>
      <div class="col-6 mt-3">
        <PostForm />
        <PostsBar />
        <div class="d-flex justify-content-between">
          <p role="button" @click="changePage(currentPage + 1)" :disabled="currentPage == 1" class="color">&lt older</p>
          <p role="button" @click="changePage(currentPage - 1)" :disabled="currentPage == totalPages" class="color">newer
            ></p>
        </div>
      </div>
      <div class="col-2">
        <AdsBar />
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import AccountBar from '../components/AccountBar.vue';
import PostsBar from '../components/PostsBar.vue';
import AdsBar from '../components/AdsBar.vue';
import Pop from '../utils/Pop';
import { postsService } from '../services/PostsService'
import PostForm from '../components/PostForm.vue';
import { Post } from '../models/Post';
import SearchBar from '../components/SearchBar.vue';

export default {

  setup() {

    async function changePage(pageNumber) {
      try {
        await postsService.changePage(`api/posts?page=${pageNumber}`)
      } catch (error) {
        Pop.error(error)
      }
    }

    return {
      changePage,
      post: computed(() => AppState.posts),
      account: computed(() => AppState.account),
      currentPage: computed(() => AppState.currentPage),
      totalPages: computed(() => AppState.totalPages),
      searched: computed(() => AppState.searchedTerm)
    }
  },
  components: { AccountBar, PostsBar, AdsBar, PostForm, SearchBar }
}
</script>

<style scoped lang="scss">
.color:hover {
  color: #17a2b8
}
</style>
