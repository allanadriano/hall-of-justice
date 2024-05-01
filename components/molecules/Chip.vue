<script setup lang="ts">
defineProps({ link: { type: Object as () => { name: string; slug: string } } });
</script>

<template>
  <AtomsLink :route="`/${link.slug || ''}`">
    <div class="bg-white rounded-full py-1 px-4 hover:transition-all hover:bg-slate-200 drop-shadow-md mr-4">
      <span class="text-purpleTheme uppercase font-black">{{ link.name || '' }}</span>
    </div>
  </AtomsLink>
</template>
