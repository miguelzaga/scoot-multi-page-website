// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend Deca", ...defaultTheme.fontFamily.sans],
        mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        yellow: "#FCB72B",
        darkNavy: "#495567",
        dimGrey: "#939CAA",
        lightGrey: "#E5ECF4",
        snow: "#F2F5F9",
        lightYellow: "#FFF4DF",
      },
      padding: {
        22: "5.5rem", // 88px
      },
    },
  },
  plugins: [],
};
