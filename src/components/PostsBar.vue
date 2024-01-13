<template>
  <div class="PostsVue card shadow rounded p-2 m-3" v-for="post in posts" :key="post.id">
    {{ post.body }}
    <img class="mt-2 img" :src="post.imgUrl" :alt="post.creator.name">
    <section class="row justify-content-between m-3 align-items-center">
      <div class="col-2">
        <img class="profile-pic mt-2" :src="post.creator.picture" :alt="post.creator.name">
      </div>
      <div class="col-2">
        {{ post.creator.name }}
      </div>
      <div> {{ post.createdAt }}</div>
      <div v-if="account" class="col-2">
        <i role="button" @click="post.likes.length++" class="fs-3 mdi mdi-heart-outline"></i>
        <i role="button" @click="post.likes.length--" class="fs-3 mdi mdi-emoticon-sad-outline"></i>
        {{ post.likes.length }}
      </div>
      <div v-else>
        <i class="fs-3 mdi mdi-heart-outline">{{ post.likes.length }}</i>
      </div>
    </section>


  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { postsService } from '../services/PostsService';

export default {
  setup() {
    let likes = 0

    function clickLike() {

    }

    onMounted(() => {
      getPosts()
    })
    async function getPosts() {
      try {
        await postsService.getPosts()
      } catch (error) {
        Pop.error(error)
      }


    }
    return {
      getPosts,
      clickLike,
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account)

    }
  }
};
</script>


<style lang="scss" scoped>
.profile-pic {
  height: 5vh;
  object-fit: fill;
  border-radius: 50%;
}

.img {
  max-height: 250px;
  object-fit: center;
}
</style>