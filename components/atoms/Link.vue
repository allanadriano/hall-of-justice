<script setup lang="ts">
defineProps({ route: { type: String, required: false } });
</script>

<template>
  <NuxtLink :to="route"><slot /></NuxtLink>
</template>
