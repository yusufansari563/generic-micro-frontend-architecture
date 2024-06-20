// tailwind.config.js
module.exports = {
  content: [
    // './projects/**/*.html',
    // './projects/**/*.js',
    // './projects/**/*.jsx',
    // './projects/**/*.ts',
    // './projects/**/*.tsx',
    '*/**/*'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#000000',
        },
        dark: {
          background: '#1a202c',
          text: '#f7fafc',
        },
      },
    },
  },
  plugins: [],
};
