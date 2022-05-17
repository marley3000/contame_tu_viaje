module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'macondo': ['Macondo', 'cursive']
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
