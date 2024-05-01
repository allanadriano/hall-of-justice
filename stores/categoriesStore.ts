import { defineStore } from 'pinia';
import { areArraysEqual } from '~/utils/arrayUtils';

export const useCategoriesStore = defineStore({
  id: 'categories',
  state: () => ({
    categoriesStories: [],
  }),
  actions: {
    addCategoriesStory(story: any) {
      this.categoriesStories.push(story);
    },
    clearCategoriesStories() {
      this.categoriesStories = [];
    },

    updateCategories(stories: any[]) {
      if (stories && stories.length > 0) {
        const categoriesData = stories.filter((story) => story.content.component.includes('category'));
        if (!areArraysEqual(this.categoriesStories, categoriesData)) {
          this.categoriesStories = categoriesData;
          localStorage.setItem('categories', JSON.stringify(categoriesData));
        }
      }
    },
  },
});
