/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'cs-blue': {
          300: '#DFEAF8',
          600: '#6D9DE0',
          500: '#5D86BF'
        }
      }
    }
  },
  plugins: []
}
