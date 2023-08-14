/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto",
      },
      gridTemplateRows: {
        header: "64px auto"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
}

