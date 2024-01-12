<template>
  <div class="PostsVue">


  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import Pop from '../utils/Pop';
export default {
  setup() {
    onMounted(()=> {
      getPosts()
    })
    async function getPosts(){
      try {
        await postsService.getPosts() 
      } catch (error) {
        Pop.error(error)
      }
    }
    return {

      
    }
  }
};
</script>


<style lang="scss" scoped></style>