import { defineStore } from 'pinia';
import { areArraysEqual } from '~/utils/arrayUtils';

export const usePostsStore = defineStore({
  id: 'posts',
  state: () => ({
    postsStories: [],
  }),
  actions: {
    addPostsStory(story: any) {
      this.postsStories.push(story);
    },
    clearPostsStories() {
      this.postsStories = [];
    },

    updatePosts(stories: any[]) {
      if (stories && stories.length > 0) {
        const postsData = stories.filter((story) => story.content.component.includes('article'));
        if (!areArraysEqual(this.postsStories, postsData)) {
          this.postsStories = postsData;
          localStorage.setItem('posts', JSON.stringify(postsData));
        }
      }
    },
  },
});
