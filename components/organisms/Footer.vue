<script setup lang="ts">
defineProps({ links: Array<Object> });
</script>

<template>
  <footer class="flex fixed bottom-0 w-100">
    <div class="container mx-auto pb-3">
      <div class="flex justify-between">
        <MoleculesLogo />

        <ul class="flex items-center">
          <li v-for="(link, index) in links">
            <MoleculesChip :key="index" :link="link" />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
