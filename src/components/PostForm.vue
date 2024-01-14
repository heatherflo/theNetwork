<template>
  <div class="PostForm">
    <div class="shadow rounded p-3 m-2" v-if="account.id">
      <form @submit.prevent="createPost()">
        <p class="mb-0 fs-3">Create a post</p>
        <div class="">
          <label for="post-picture"></label>
          <input v-model="postData.imgUrl" type="url" class="form-control my-1" placeholder="Place image here"
            name="post-picture" id="post-picture">
        </div>
        <div>
          <input v-model="postData.body" class="form-control" placeholder="What do you want to say?" required type="text"
            name="body" minlength="3" maxlength="300">
          <label for="body"></label>

        </div>
        <div class="text-end">

          <button class="btn btn-info rounded">submit</button>
        </div>
      </form>
    </div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { postsService } from '../services/PostsService';
export default {
  setup() {
    const postData = ref({})
    async function createPost() {
      try {
        await postsService.createPost(postData.value)
        Pop.success('you created a post!')
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      createPost,
      postData,
      account: computed(() => AppState.account)
    }
  }
};
</script>


<style lang="scss" scoped></style>