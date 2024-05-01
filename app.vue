<script setup lang="ts">
import { computed } from 'vue';
import { useStoriesStore } from '~/stores/storiesStore';
import { useCategoriesStore } from './stores/categoriesStore';

const storiesStore = useStoriesStore();
const categoriesStore = useCategoriesStore();

const categories = computed(() => categoriesStore.categoriesStories);

onMounted(() => {
  storiesStore.fetchData();
});
</script>

<template>
  <NuxtLayout :links="categories">
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
body {
  font-family: 'Montserrat', sans-serif;
}
</style>
