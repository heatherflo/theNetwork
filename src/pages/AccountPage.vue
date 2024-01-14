<template>
  <div class="container-fluid">

    <section class="about row">
      <div class="col-12">
        <h1>Welcome {{ account.name }}</h1>
        <img class="rounded profile-picture" :src="account.picture" :alt="account.name" />
        <p>{{ account.email }}</p>
      </div>
    </section>
    <section class="row">
      <div class="col-12">
        <h3>Edit Account Data</h3>
        <form @submit.prevent="upDateAccount()">
          <div class="mb-2">
            <label for="name">Name</label>
            <input v-model="editable.name" class="w-100" id="name" type="text" required>
          </div>
          <div class="mb-2">
            <label for="coverImg">Cover Image</label>
            <input v-model="editable.coverImg" class="w-100" id="coverImg" type="url">
          </div>
          <div class="mb-2 ">
            <label for="picture">Profile Picture</label>
            <input v-model="editable.picture" class="w-100 " id="picture" type="url">
          </div>
          <div class="mb-3">
            <label for="bio">Bio</label>
            <textarea v-model="editable.bio" name="bio" id="" class="w-100" rows="10"></textarea>
          </div>
          <div class="mb-2">
            <label for="github">Github</label>
            <input v-model="editable.github" class="w-100" id="github" type="url" required>
          </div>
          <div class="mb-2">
            <label for="linkedin">Linkedin</label>
            <input v-model="editable.linkedin" class="w-100" id="linkedin" type="url" required>
          </div>
          <div class="mb-3">
            <label for="graduated">Graduated?</label>
            <input v-model="editable.graduated" class="ms-2" id="graduated" type="checkbox">
          </div>
          <button class="form-control shadow">Make Changes</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, watch, ref } from 'vue';
import { AppState } from '../AppState';
import { accountService } from '../services/AccountService';
import Pop from '../utils/Pop';

export default {
  setup() {
    const editable = ref({})
    const account = computed(() => AppState.account)

    watch(
      account,
      () => {
        editable.value = { ...AppState.account }
      },
      { immediate: true }
    )


    return {
      account,
      editable,
      async upDateAccount() {
        try {
          const accountData = editable.value
          await accountService.updateAccount(accountData)
          Pop.success('Updated account!')
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>
.profile-picture {
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
