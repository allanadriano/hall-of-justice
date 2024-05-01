<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span v-html="content" />
</template>

<style lang="scss">
p {
  @apply text-gray-800 font-medium text-xl my-4;
}
</style>
