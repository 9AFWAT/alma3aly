const plugin = require('tailwindcss/plugin')

module.exports = {
  important: true,
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      // Add your custom styles here
    }),
  ],
};