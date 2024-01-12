<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-3">
        <ProfileBar />
      </div>
    </section>
  </div>
</template>

<script>
import ProfileBar from '../components/ProfileBar.vue'

export default {
  setup() {
    return {

    }
  },
  components: { ProfileBar }
}
</script>

<style scoped lang="scss"></style>
