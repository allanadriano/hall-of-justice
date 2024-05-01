<script setup lang="ts">
defineProps({ links: Array<Object> });
</script>

<template>
  <section class="app bg-purpleTheme relative pb-40">
    <OrganismsNavbar :links="links" />

    <div class="container mx-auto">
      <slot />
    </div>

    <!-- <OrganismsFooter :links="links" /> -->
  </section>
</template>

<style lang="scss">
section {
  &.app {
    min-height: 100vh;
    min-width: 100vh;
  }
}
</style>
