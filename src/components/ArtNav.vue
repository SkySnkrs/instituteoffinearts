<script setup lang="ts">
import { computed } from 'vue';
import Login from './Login.vue';
import { AppState } from '@/AppState';
import { artsService } from '@/services/ArtsService';

const page = computed(() => AppState.page)
const totalPages = computed(() => AppState.totalPages)


function nextPage(pageNumber){
    artsService.getArtsByPage(pageNumber)
}
</script>
<template>
    <nav class="text-center text-dark">
        <div class="infoSection my-2">
            <p>You Are On Page {{ page }} Of {{ totalPages }}</p>
        </div>
        <div class="my-2 text-center">
            <button @click="nextPage(page - 1)" class="btn w-35 mx-1">
                <p class=""><i class="mdi mdi-arrow-left"></i>Previous</p>
            </button>
            <button @click="nextPage(page + 1)" class="btn w-35 mx-1">
                <p>Next <i class="mdi mdi-arrow-right"></i></p> 
            </button>
        </div>
        <div class="accountSignIn mt-5">
            <Login />
        </div>
    </nav>
  </template>


  <style scoped lang="scss">
  nav {
    font-size: 18px;
  }
  
  .infoSection{
    min-height: 75%;
  }

  .accountSignIn{
    min-height: 25%;
  }

  .btn{
    background-color: #7d96a6;
    border: 1px solid black;
  }


  </style>