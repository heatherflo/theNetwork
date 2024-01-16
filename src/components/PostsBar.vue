<template>
  <div class="PostsBarVue card shadow rounded p-2 mt-3" v-for="post in posts" :key="post.id">


    <section class="row justify-content-between align-items-center pb-2">
      <div class="col-1">
        <router-link :to="{ name: 'Profile', params: { profileId: post.creatorId } }">
          <img class="profile-pic mt-2 text-start" :src="post.creator.picture" :alt="post.creator.name">
        </router-link>
      </div>
      <div class="col-8 text-start">
        <div>
          {{ post.creator.name }}
        </div>
        <div>
          {{ post.creator.createdAt=new Date().toLocaleDateString('en-US', {
            month: 'numeric', day: 'numeric', year: 'numeric'
          }) }}
        </div>

      </div>
      <div class="col-1 m-2">
        <i role="button" v-if="account.id == post.creatorId" @click="deletePost(post.id)"
          class=" fs-3 delete mdi mdi-trash-can-outline"></i>
      </div>
    </section>
    <img v-if="post.imgUrl" class="mt-2 img" :src="post.imgUrl" :alt="post.creator.name">
    <section class="row m-1 justify-content-between align-items-center">
      <p>
        {{ post.body }}
      </p>
      <div v-if="account.id" class="col-12 text-end">
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
import { computed, ref, onMounted, onUpdated } from 'vue';
import Pop from '../utils/Pop';
import { postsService } from '../services/PostsService';
import SearchBar from './SearchBar.vue';
import { RouterLink } from 'vue-router';
import { Post } from '../models/Post';


export default {
  props: {
    post: { type: Post, required: true }
  },
  setup() {




    onMounted(() => {
      getPosts();
    });
    async function getPosts() {
      try {
        await postsService.getPosts();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    async function deletePost(postId) {
      try {
        if (await Pop.confirm('Are you sure?')) {
          await postsService.deletePost(postId);
          Pop.success("It's gone!");
        }
      }
      catch (error) {
        Pop.error(error);
      }

    }
    return {

      getPosts,
      deletePost,
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
    };
  },
  components: { SearchBar, RouterLink }
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