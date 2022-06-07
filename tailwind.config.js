module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        xxs: '280px',
        xs: '360px',
        sm: '375px',
        md: '768px',
      },
    },
  },
  plugins: [],
};
