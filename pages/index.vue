<script setup lang="ts">
import { computed } from 'vue';
import { usePostsStore } from '~/stores/postsStore';

const postsStore = usePostsStore();

const posts = computed(() => postsStore.postsStories);

const mainPost = computed(() => (posts.value.length > 0 ? posts.value[0] : null));
const otherPosts = computed(() => posts.value.slice(1).map((post) => post));
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="md:col-span-1">
      <AtomsLink v-if="mainPost" :route="`/blog/${mainPost.slug}`">
        <MoleculesPost v-if="posts" :post="mainPost.content" />
      </AtomsLink>
    </div>

    <div class="md:col-span-1">
      <div v-for="(post, index) in otherPosts" :key="index">
        <AtomsLink :route="`/blog/${post.slug}`">
          <MoleculesPost :single-list-post="true" :post="post.content" />
        </AtomsLink>
      </div>
    </div>
  </div>
</template>
