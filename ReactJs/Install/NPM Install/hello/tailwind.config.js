// tailwind.config.js
const {nextui} = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // single component styles
    "./src/**/*.{js,jsx,ts,tsx}",
    
    "./node_modules/@nextui-org/theme/dist/components/button.js", 
    // or you can use a glob pattern (multiple component styles)
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js',
    
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};