/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        yellow: "#FCB72B",
        darkNavy: "#495567", 
        dimGrey: "#939CAA",
        lightGrey: "#E5ECF4",
        snow: "#F2F5F9",
        lightYellow: "#FFF4DF",
        

      }
    },
  },
  plugins: [],
}

