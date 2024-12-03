<script setup>
import ArtDisplay from '@/components/ArtDisplay.vue';
import ArtNav from '@/components/ArtNav.vue';
import { artsService } from '@/services/ArtsService';
import { onMounted } from 'vue';

onMounted(() => {
  artsService.getArts()
});
</script>

<template>
  <header>
    <h3 class="p-3 mt-2 fw-bold text-center">Boise Fine Arts Institute</h3>
  </header>
  <main class="app-layout">
    <section class="sidebar">
      <ArtNav />
    </section>
    <section class="content">
      <ArtDisplay />
    </section>
  </main>
</template>

<style scoped lang="scss">
.app-layout {
  display: flex; 
  height: 88.9vh; 
}

body{
  background-color: #6181a1;
  height: auto;
}


.sidebar {
  width: 25%; 
  background-color: #6181a1; 
  color: white;
  padding: 16px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto; 
  border-top: 3px solid #1c1f21;
}

header{
  background-color: #6181a1;
  color: black;
  height: 10dvh;
}

.content {
  width: 75%; 
  padding: 16px;
  background-color: #7d96a6; 
  overflow-y: auto; 
  border: 3px solid #1c1f21;

}
</style>