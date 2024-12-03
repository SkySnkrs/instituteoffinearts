<script setup>
import { AppState } from '@/AppState';
import { computed } from 'vue';



const arts = computed(() => AppState.Art)

const scaleFactor = 35


</script>


<template>
    <section class="p-3 pictureMasonry">
        <section class="masonry-grid">
            <div v-for="art in arts" :key="art.id" class="masonry-item shadow-lg"
                :style="{ gridRowEnd: `span ${Math.ceil((art.height / scaleFactor) / 10)}` }">
                <img :src="art.imageUrl" alt="Art" class="img-fluid">
            </div>
        </section>
    </section>
</template>

<style lang="scss" scoped>


.masonry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
    grid-auto-rows: 10px; 
    gap: 8px; 
}

.masonry-item {
    grid-row: span calc(var(--height) / 10); 
    display: block;
    overflow: hidden;
}

.img-fluid {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 8px;
}

</style>