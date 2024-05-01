<script setup lang="ts">
import { computed } from 'vue';
import { usePostsStore } from '~/stores/postsStore';

const postsStore = usePostsStore();
const router = useRouter();
const route = useRoute();

const slug = route.params.slug;

const post = computed(() => {
  return postsStore.postsStories.find((post) => post?.slug === slug);
});

if (!post) {
  router.push('/error-page');
}

useSeoMeta({
  title: post?.content?.title,
  ogTitle: post?.content?.title,
  description: post?.content?.description,
  ogDescription: post?.content?.description,
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div>
    <MoleculesPost :single-post="true" v-if="post" :post="post.content" />
  </div>
</template>
