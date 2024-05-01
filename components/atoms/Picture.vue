<script setup lang="ts">
defineProps({
  image: {
    type: Object as () => { name: string; src: string },
  },
});
</script>

<template>
  <NuxtImg :src="image.src" :alt="image.name" />
</template>
