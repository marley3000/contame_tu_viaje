module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'macondo': ['Macondo', 'cursive'],
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
