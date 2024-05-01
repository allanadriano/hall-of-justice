import { defineStore } from 'pinia';
import { fetchStoriesFromStoryblok } from '~/services/storyblokService';
import { useUsersStore } from './usersStore';
import { useCategoriesStore } from './categoriesStore';
import { usePostsStore } from './postsStore';

export const useStoriesStore = defineStore({
  id: 'stories',
  state: () => ({
    stories: [] as any[],
  }),
  actions: {
    async fetchData() {
      try {
        let newStories = [];
        newStories = await fetchStoriesFromStoryblok();
        localStorage.setItem('stories', JSON.stringify(newStories));
        this.stories = newStories;

        if (this.stories.length > 0) {
          this.checkForChanges(newStories);
        } else {
          console.log('There is no data in the state of Pinia.');
        }
      } catch (error) {
        console.error('Error recovering data from Storyblok:', error);
      }
    },

    checkForChanges(newStories: any[]) {
      const addedStories = newStories.filter(
        (newStory) => !this.stories.find((storedStory) => storedStory.id === newStory.id),
      );
      const removedStories = this.stories.filter(
        (storedStory) => !newStories.find((newStory) => newStory.id === storedStory.id),
      );

      this.stories = newStories;

      const usersStore = useUsersStore();
      const categoriesStore = useCategoriesStore();
      const postsStore = usePostsStore();
      usersStore.updateUsers(newStories);
      categoriesStore.updateCategories(newStories);
      postsStore.updatePosts(newStories);

      localStorage.setItem('stories', JSON.stringify(newStories));

      if (addedStories.length > 0 || removedStories.length > 0) {
        console.log('Stories updated in the state of Pinia:', newStories);
      }
    },
  },
});
