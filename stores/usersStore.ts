import { defineStore } from 'pinia';
import { areArraysEqual } from '~/utils/arrayUtils';

export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    usersStories: [],
  }),
  actions: {
    addUsersStory(story: any) {
      this.usersStories.push(story);
    },
    clearUsersStories() {
      this.usersStories = [];
    },
    updateUsers(stories: any[]) {
      if (stories && stories.length > 0) {
        const usersData = stories.filter((story) => story.content.component.includes('author'));
        if (!areArraysEqual(this.usersStories, usersData)) {
          this.usersStories = usersData;
          localStorage.setItem('users', JSON.stringify(usersData));
        }
      }
    },
  },
});
