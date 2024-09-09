/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackish: "#2E2E2E",
        primaryColor: "#00CDE1",
      },
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
