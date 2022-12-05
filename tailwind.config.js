/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "1xl": "1440px",
      // => @media (min-width: 1440px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      fontFamily: {
        mainFont: ["Manrope"],
        secondFont: ["DMSans"],
        thirdFont: ["Inter"],
      },
      colors: {
        tailPrimary: "#937DC2",
        primaryDark: "#583D88",
        tailSecondary: "#4CB71A",
        title: "#2E2B2B",
        subtitle: "#8B8B8B",
        linkBlack: "#181818",
        gray: "#ABABAB",
        graySecondary: "#D9D9D9",
        grayOpacity: "rgba(26, 23, 23, 0.38)",
        borderOpacity: "rgba(0, 0, 0, 0.12)",
        grayDark: "#6A6A6A",
        yellow: "#FBBC05",
      },
      boxShadow: {
        input: "inset 0px 0px 0px 0.977597px #878787;",
        post: "0px 0px 16px 1px rgba(0, 0, 0, 0.15)",
        poster: "46px 0px 60px 12px rgba(0, 0, 0, 0.07)",
        form: [
          "0px 4px 4px rgba(0, 0, 0, 0.25)",
          "46px 0px 60px 12px rgba(0, 0, 0, 0.07)",
        ],
      },
      dropShadow: {
        poster: "0px 4px 4px rgba(39, 39, 39, 0.15)",
      },
    },
  },
  plugins: [],
};
