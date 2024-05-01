<script setup lang="ts">
defineProps({ links: Array<Object> });
</script>

<template>
  <nav class="flex">
    <div class="container mx-auto py-3">
      <div class="flex justify-between">
        <MoleculesLogo />

        <ul class="flex items-center">
          <li v-for="(link, index) in links">
            <MoleculesChip :key="index" :link="link" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss"></style>
