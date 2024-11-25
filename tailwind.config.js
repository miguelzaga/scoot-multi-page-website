// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
      white: "#fff",
      black: "#000",
      transparent: "rgba(0, 0, 0, 0)",
    },

    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.045em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
    },
    extend: {
      padding: {
        22: "5.5rem", // 88px,
      },
      margin: {
        29: "7.5rem", // 120px
      },
      space: {
        29: "7.5rem", // 120px
      },

      fontSize: {
        body: ["0.938rem", "1.563rem"], // [15px, 25px]
        h4: ["1.5rem", "1.75rem"], // [24px, 28px]
        h3: ["2.5rem", "3rem"], // [40px, 48px]
        h2: ["3rem", "3rem"], // [48px, 48px]
        h1: ["3.5rem", "3.5rem"], // [56px, 56px]
        "3.5xl": "2rem", // 32px
      },
    },
  },
  plugins: [],
};
