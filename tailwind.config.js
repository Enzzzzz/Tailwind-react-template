import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fc8484",
        secondary: "#84d4fc",
        tertiary: "#1a1a1a",
        accent: "#f55959",
        hover: "#fc6f6f",
        text: "#2b1e0f",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimRed: "rgba(151, 9, 49, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        neonMain: "0 0 5px #00F, 0 0 20px #00B",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--color-primary": theme("colors.primary"),
          "--color-secondary": theme("colors.secondary"),
          "--color-dimWhite": theme("colors.dimWhite"),
          "--color-dimBlue": theme("colors.dimBlue"),
          "--font-poppins": theme("fontFamily.poppins")[0],
        },
      });
    }),
  ],
};
