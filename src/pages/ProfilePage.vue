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
    }
    ;
    onMounted(() => {
      getProfile();
    });
    return {
      getProfile,
      profile: computed(() => AppState.profile),
      route,
    };
  },
  components: { PostsBar }
};
</script>


<style lang="scss" scoped></style>
