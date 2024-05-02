/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "ghost-white": "#F8F8FF",
        "light-white": "#F0F8FF",
        snow: "#FFFAFA",
        ivory: "#FFFFF0",
        "dark-slate-gray": "#0D1717",
      },
      width: {
        71: "280px",
      },
      height: {
        51: "200px",
      },
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
        poppins: "Poppins, sans-serif",
        inter: "Inter, sans-serif",
      },
      keyframes: {
        down: {
          "0%": {
            transform: "translateY(-20%)",
            opacity: "0%",
          },
          "70%": {
            opacity: "25%",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "100%",
          },
        },
        pulse: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        showDown: "down 500ms ease-out",
        fadeIn: "pulse 200ms ease-in ",
      },
      screens: {
        "2xl": "1520px",
      },
    },
  },
  plugins: [],
};
