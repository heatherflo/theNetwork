<template>
  <section class="about text-center row">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </section>
  <section class="row">
    <div class="col-12">
      <h3>Edit Account Data</h3>
      <form>
        <div class="mb-2">
          <label for="name">Name</label>
          <input v-model="editable.name" class="w-100" id="name" type="text" required>
        </div>
        <div class="mb-2">
          <label for="coverImg">Cover Image</label>
          <input v-model="editable.coverImg" class="w-100" id="coverImg" type="url" required>>
        </div>
        <div class="mb-2">
          <label for="picture">Profile Picture</label>
          <input v-model="editable.picture" class="w-100" id="picture" type="url" required>>
        </div>
        <div class="mb-3">
          <label for="bio">Bio</label>
          <textarea v-model="editable.bio" name="bio" id="" class="w-100" rows="10"></textarea>
        </div>
        <div class="mb-2">
          <label for="github">Github</label>
          <input v-model="editable.github" class="w-100" id="github" type="url" required>>
        </div>
        <div class="mb-2">
          <label for="linkedin">Linkedin</label>
          <input v-model="editable.linkedin" class="w-100" id="linkedin" type="url" required>>
        </div>
        <div class="mb-3">
          <label for="graduated">Graduated?</label>
          <input v-model="editable.graduated" class="ms-2" id="graduated" type="checkbox">
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { computed, watch, ref } from 'vue';
import { AppState } from '../AppState';
import { accountService } from '../services/AccountService';
import Pop from '../utils/Pop';

export default {
  setup() {
    const editable = ref({})

    watch(
      account,
      () => {
        editable.value = { ...AppState.account }
      },
      { immediate: true }
    )


    return {
      account: computed(() => AppState.account),
      editable,
      async upDateAccount() {
        try {
          const accountData = editable.value
          await accountService.updateAccount(accountData)
          Pop.success('updated account')
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
