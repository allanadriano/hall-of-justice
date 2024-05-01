<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { useUsersStore } from '~/stores/usersStore';

const authorsStore = useUsersStore();

const props = defineProps({
  singlePost: { type: Boolean, default: false, required: false },
  singleListPost: { type: Boolean, default: false, required: false },
  post: {
    type: Object as () => {
      title: string;
      slug: string;
      description: string;
      author: string;
      body: any;
      image: {
        filename: string;
      };
    },
  },
});

const author = computed(() => {
  return authorsStore.usersStories.find((user) => user?.uuid === props.post?.author);
});
</script>

<template>
  <div v-if="post" class="post mt-5">
    <AtomsCard>
      <div :class="[singleListPost ? 'list' : '']">
        <span>
          <AtomsPicture
            :image="{
              name: post?.title || '',
              src: post?.image?.filename || '',
            }"
          />
        </span>

        <div class="p-8">
          <AtomsTitle>{{ post?.title }}</AtomsTitle>

          <AtomsDescription>
            {{ post?.description }}
          </AtomsDescription>

          <div v-if="author" class="flex author items-center">
            <AtomsPicture
              :image="{
                name: author.content?.name || '',
                src: author.content?.image?.filename || '',
              }"
            />
            <span class="ml-3 font-sm font-bold uppercase text-slate-900">por {{ author.content?.name }}</span>
          </div>

          <div v-if="singlePost">
            <AtomsBody :content="post?.body" />

            <h2 class="font-sm font-bold uppercase text-slate-600 mt-10">
              Façam da Hall of Justice um lugar seguro para todos, todas as oponiões devem ser respeitas!
            </h2>
            <div class="px-8 pt-10 pb-20">
              <DisqusComments :identifier="`blog/${post?.slug}`" />
            </div>
          </div>
        </div>
      </div>
    </AtomsCard>
  </div>
  <AtomsTitle v-else>Carregando...</AtomsTitle>
</template>

<style lang="scss">
.post {
  img {
    width: 100%;
  }

  .list {
    @apply flex;

    h1 {
      @apply text-base;
    }

    p {
      @apply text-sm;
      line-height: 1;
    }

    .p-8 {
      @apply p-4;
    }

    .author {
      img {
        width: 32px;
        height: auto;
      }
      span {
        @apply text-sm;
      }
    }
  }

  .author {
    img {
      @apply rounded-full shadow-xl;
      width: 48px;
      height: auto;
    }
  }
}
</style>
