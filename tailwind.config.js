/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
          bgDesktop: "url('/src/app/assets/backgrounds/bgDesktop.jpg')",
      },
      colors: {
          primary: "#ffbe33",
          secondary: "#222831",
          borderColor: "neutral-400",
          danger: "#ff0000",
          darky: "#0F0F0F",
          pinky: "#CA4B96",
      },
      fontFamily: {
          dancing: ["Dancing Script", "cursive"],
          sans: ["Open Sans", "sans-serif"],
          itim: ["Itim", "cursive"],
          cantarell: ["Cantarell", "sans-serif"],
          pFont: ["Source Sans Pro", "sans-serif"],
          roboto: ["Roboto", "sans-serif;"],
      },
    },
  },
  plugins: [],
};
