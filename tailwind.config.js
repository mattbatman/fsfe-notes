module.exports = {
  purge: [
    './src/styles/**/*.css',
    './src/components/**/*.tsx',
    './src/templates/**/*.tsx',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '6rem',
        },
      },
      colors: {
        gray: { 200: '#f5f2f0' },
      },
      screens: {
        md: '900px',
      },
    },
  },
  variants: {},
  plugins: [],
};
