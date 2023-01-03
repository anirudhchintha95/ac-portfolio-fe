/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      blur: {
        xs: "2px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        shake: {
          "0%": {
            transform: "translateX(0px)",
            "timing-function": "ease-in",
          },
          "20%": {
            transform: "translateX(4px)",
            "timing-function": "ease-out",
          },
          "40%": {
            transform: "translateX(-4px)",
            "timing-function": "ease-in",
          },
          "60%": {
            transform: "translateX(2px)",
            "timing-function": "ease-out",
          },
          "80%": {
            transform: "translateX(-2px)",
            "timing-function": "ease-in",
          },
          "100%": {
            transform: "translateX(0px)",
            "timing-function": "ease-in",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 500ms ease-in",
        wiggle: "wiggle 1s ease-in-out infinite",
        shake: "shake 1s ease-in-out infinite",
      },
      fontFamily: {
        body: "source-code-pro",
      },
    },
  },
  plugins: [],
};
