<template>
  <div class="PostCard">

    <div>
      <img v-if="post.creator.picture" class="profile-pic m-2" :src="post.creator.picture" :alt="post.creator.name">
      <i role="button" v-if="account.id == post.creatorId" @click="deletePostProfilePage(post.id)"
        class=" fs-3 delete mdi mdi-trash-can-outline"></i>
    </div>
    <div class="ms-2" v-if="post.updatedAt">
      {{ post.creator.name }}
      {{ post.updatedAt=new Date().toLocaleDateString('en-US', {
        month: 'numeric', day: 'numeric', year: 'numeric'
      }) }}

    </div>

    <img class="img mt-2" v-if="post.imgUrl" :src="post.imgUrl" alt="coverImage">


    <div class="ms-2" v-if="post.body">
      {{ post.body }}
    </div>


  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted, popScopeId } from 'vue';
import { Post } from '../models/Post';
import { postsService } from '../services/PostsService';
import Pop from '../utils/Pop';
export default {
  props: { post: { type: Post, required: true } },
  setup() {

    return {
      account: computed(() => AppState.account),

      async deletePostProfilePage(postId) {
        try {
          if (await Pop.confirm('Are you sure?')) {
            await postsService.deletePostProfilePage(postId)
            Pop.success('Its gone!')
          }
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.profile-pic {
  height: 5vh;
  width: 5vh;
  object-fit: cover;
  border-radius: 50%;
}

.img {
  max-height: 300px;
  max-width: auto;
  object-fit: cover;
  object-position: center;
}

.delete {
  color: red;
}
</style>