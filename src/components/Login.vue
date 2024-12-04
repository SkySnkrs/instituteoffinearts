<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { AuthService } from '../services/AuthService.js';

const identity = computed(() => AppState.identity)
const account = computed(() => AppState.account)
async function login() {
  AuthService.loginWithPopup()
}
async function logout() {
  AuthService.logout()
}

</script>

<template>
  <section class="text-center">
      <button class="btn btn-primary selectable text-dark text-uppercase my-2 my-lg-0" @click="login" v-if="!identity">
        Login
      </button>
    
    <div v-else>
      <div class="dropdown my-2 my-lg-0 text-center">
        <div type="button" class=" border-0  no-select" data-bs-toggle="dropdown"
          aria-expanded="false">
          <div v-if="account?.picture || identity?.picture">
            <img :src="account?.picture || identity?.picture" alt="account photo" height="50" class="rounded" />
            <span class="mx-3 no-select">{{ account.name }}</span>
            <div class=" mt-2 selectable" @click="logout">
              <i class="mdi mdi-logout"></i>
              logout
            </div>
          </div>
        </div>
        
          </div>
        </div>
      </section>
</template>

<style lang="scss" scoped></style>
