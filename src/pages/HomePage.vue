<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-3">
        <AccountBar />
      </div>
      <div class="col-6">
        <PostsBar />
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

export default {
  setup() {



    return {
      account: computed(() => AppState.account)

    }
  },
  components: { AccountBar, PostsBar }
}
</script>

<style scoped lang="scss"></style>
