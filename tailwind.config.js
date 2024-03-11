/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "phone": {
        "max": '440px',
      },
      "tablet": {
        max: "850px"
      }
    },
    extend: {
      backgroundImage: {
        "beauty": "url(./components/image/bg-weather.png)",
        "nature": "url(./components/image/bg-weather-rain.png)",
        "thunder": "url(./components/image/bg-weather-thunder.png)"
      }
    },
  },
  plugins: [],
}