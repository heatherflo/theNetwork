<template>
  <div class="container-fluid">


    <section class="row  m-2 justify-content-between">
      <div class="col-2 mt-3">
        <AccountBar />
      </div>
      <div class="col-6 mt-2">
        <div class="card mt-2">
          <div>

          </div>
          <img class="profile-picture" :src="profile.picture" :alt="profile.name">
          <img class="img-fluid coverImg" :src="profile.coverImg" :alt="profile.name">

          <h3 class="mt-5 ms-5">
            {{ profile.name }}
          </h3>
          <h5 class="ms-5 mt-2 mb-4" v-if="profile.id && profile.graduated">Codeworks<i><i
                class="fs-2 mdi mdi-school"></i></i>
          </h5>
          <div class="d-flex ms-3 p-3 ">
            <div v-if="profile.id && profile.github"><i class="fs-3 m-2 mdi mdi-github"></i></div>
            <div v-if="profile.id && profile.linkedin"><i class=" fs-3 m-2 mdi mdi-linkedin"></i></div>
            <div v-if="profile.id && profile.resume"><i class="fs-3 m-2 mdi mdi-file-account"></i></div>
          </div>


        </div>

        <PostForm />
        <div v-for="post in posts" :key="post.id">
          <PostsBar :post="post" />
        </div>
        <!-- <div class="d-flex justify-content-between">
          <p role="button" @click="changePage(currentPage + 1)" :disabled="currentPage == 1" class="color">&lt older</p>
          <p role="button" @click="changePage(currentPage - 1)" :disabled="currentPage == totalPages" class="color">newer
            ></p>
        </div> -->
      </div>
      <div class="col-2">
        <AdsBar />
      </div>
    </section>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted, watch } from 'vue';
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';
import { profilesService } from '../services/ProfilesService';
import { logger } from '../utils/Logger';
import { postsService } from '../services/PostsService';
import AccountBar from '../components/AccountBar.vue';
import PostsBar from '../components/PostsBar.vue';
import PostForm from '../components/PostForm.vue';

export default {
  setup() {
    const route = useRoute();
    const watchableProfileId = computed(() => route.params.profileId)


    async function getProfileById() {
      try {
        const profileId = route.params.profileId;
        await profilesService.getProfileById(profileId);
      }
      catch (error) {
        Pop.error(error);
      }
    };

    async function getPostsById() {
      try {
        const profileId = route.params.profileId;
        logger.log('getting post by Id in Page')
        await postsService.getPostById(profileId)
      } catch (error) {
        Pop.error(error)
      }
    }

    watch(watchableProfileId, () => {
      logger.log(route);
      console.log('is this working?')
      postsService.clearAppState()
      getProfileById();
      getPostsById();
    },
      { immediate: true }
    )

    return {
      post: computed(() => AppState.posts),
      profile: computed(() => AppState.activeProfile),
    };
  },
  components: { AccountBar, PostsBar, PostForm }
};
</script>


<style lang="scss" scoped>
.profile-picture {
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  top: 130px;
  left: -50px;
  z-index: 1;
}

.coverImg {
  position: relative;
  max-height: 30vh;
  max-width: 100%;
  object-fit: cover;

}
</style>
