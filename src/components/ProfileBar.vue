<template>
  <div class="ProfileBar">
    <div>
      <img :src="profileId" alt="">
    </div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute()

    async function getProfileById() {
      const profileId = route.params.profileId
      await profilesService.getProfileById(profileId);

    };

    return {}
  }
};
</script>


<style lang="scss" scoped></style>