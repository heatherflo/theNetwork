<template>
  <div class="SearchBar">

    <form class="rounded input-group p-3">
      <label for="searchBar"></label>
      <input class="form-control" id="searchBar" placeholder="Search Here" name="searchBar" type="text" required
        minlength="2" maxlength="20">
      <button class="btn btn-light "><i class="mdi mdi-magnify"></i></button>
    </form>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
export default {
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped></style>