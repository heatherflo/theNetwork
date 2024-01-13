<template>
  <div class="container-fluid">


    <section class="row justify-content-between">
      <div class="col-2">
        <AccountBar />
      </div>
      <div class="col-6">
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
      account: computed(() => AppState.account),
      currentPage: computed(() => AppState.currentPage),
      totalPages: computed(() => AppState.totalPages)

    }
  },
  components: { AccountBar, PostsBar, AdsBar, PostForm }
}
</script>

<style scoped lang="scss">
.color:hover {
  color: #17a2b8
}
</style>
