/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        base: {
          primary: '#3DCBB1'
        }
      }
    }
  },
  plugins: []
}
