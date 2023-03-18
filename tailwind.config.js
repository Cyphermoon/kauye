/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        "xamarin-primary": "#F54E5E",
        primary: {
          50: "#FAFCFF",
          100: "#E1F0FF",
          DEFAULT: "#0582FD"
        },
        heading: "#001A33",
        gray: {
          50: " #E9EBED",
          100: "#CDD1D6",
          200: "#B1B8BF",
          DEFAULT: "#798591",
          600: "#4A525A",
          800: "#1B1F21"
        }
      }
    },
  },
  plugins: [],
}