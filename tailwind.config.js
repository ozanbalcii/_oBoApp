/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  
    screens: {
      xxs: '300px',
      '2xs': '400px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      '2md': '800px',
      '3md': '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '2xxl': '1600px',
      '25xl': '1800px',
      '3xl': '1920px',
    },
    extend: {
      blur: {
        xlsm: '1px',
      },
      boxShadow: {
        '3xl': '0 75px 8px -15px rgba(0, 0, 0, 0.6)',
      },
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
        jakarta: ["var(--font-jakarta)"],
        dancing: ["Dancing Script", "cursive"],
        sans: ["Open Sans", "sans-serif"],
        itim: ["Itim", "cursive"],
        cantarell: ["Cantarell", "sans-serif"],
        pFont: ["Source Sans Pro", "sans-serif"],
        roboto: ["Roboto", "sans-serif;"],
      },
    },
  },
  plugins: [

  ],
};
