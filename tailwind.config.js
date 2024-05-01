/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        purpleTheme: {
          light: '#9d4edd',
          DEFAULT: '#6c2ac1',
          dark: '#4b0082',
        },
      },
    },
  },
  plugins: [],
};
