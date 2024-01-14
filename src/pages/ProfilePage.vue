<template>
  <section class="ProfilePage row" v-if="profile">
    <div>
      <img class="profile-picture" :src="profile.picture" :alt="profile.name">
    </div>
    <div class="col-3">
      <img class="coverImg" :src="profile.coverImg" :alt="profile.name">
    </div>
    <PostsBar />

  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted, watch } from 'vue';
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';
import { profilesService } from '../services/ProfilesService';
import PostsBar from '../components/PostsBar.vue';
import { logger } from '../utils/Logger';
import { postsService } from '../services/PostsService';

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
        await postsService.getPostById(profileId)
      } catch (error) {
        Pop.error(error)
      }
    }

    watch(watchableProfileId, () => {
      logger.log(route);
      getProfileById();
      getPostsById();
      postsService.clearAppState()
    },
      { immediate: true }
    )

    return {
      post: computed(() => AppState.posts),
      profile: computed(() => AppState.profile),
    };
  },
  components: { PostsBar }
};
</script>


<style lang="scss" scoped></style>
