<script setup lang="ts">
const logoImage: Object = {
  src: 'img/hall.png',
  name: 'logo app',
};
</script>

<template>
  <AtomsLink route="/">
    <div class="flex flex-col uppercase items-center">
      <span class="logo flex justify-center items-center size-16 bg-yellow-400 rounded-full shadow-xl">
        <AtomsPicture :image="logoImage" />
      </span>
      <div class="flex flex-col -mt-4">
        <span class="font-black text-3xl text-white">Hall</span>
        <span class="text-sm/[12px] font-medium text-yellow-400">of Justice</span>
      </div>
      <div class="bg-white px-2 rounded mt-1 shadow-lg">
        <span class="title text-sm font-black text-purpleTheme">Cultura nerd</span>
      </div>
    </div>
  </AtomsLink>
</template>

<style lang="scss">
.logo {
  img {
    height: 36px;
  }
}

span {
  &.title {
    font-size: 12px;
  }
}
</style>
