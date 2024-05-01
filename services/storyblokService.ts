import axios from 'axios';

export const fetchStoriesFromStoryblok = async () => {
  const config = useRuntimeConfig();

  try {
    const response = await axios.get(config.public.apiBase, {
      params: {
        token: config.public.apiToken,
      },
    });

    if (response.status !== 200) {
      throw new Error('Error recovering data from Storyblok:' + response.statusText);
    }

    return response.data.stories;
  } catch (error) {
    console.error('Error recovering data from Storyblok:', error);
    throw error;
  }
};
