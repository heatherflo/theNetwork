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
          <textarea v-model="postData.body" name="body" id="body" placeholder="What do you want to say today?"
            class="w-100 mt-2" rows="10"></textarea>
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

    function resetForm() {
      postData.value = {}
    }

    async function createPost() {
      try {
        await postsService.createPost(postData.value)
        Pop.success('you created a post!')
        resetForm()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      resetForm,
      createPost,
      postData,
      account: computed(() => AppState.account)
    }
  }
};
</script>


<style lang="scss" scoped></style>