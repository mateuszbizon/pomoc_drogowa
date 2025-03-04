import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-orange": "var(--main-orange)",
        "main-orange-hover": "var(--main-orange-hover)",
        "dark-orange": "var(--dark-orange)",
        "light": "var(--light)",
        "light2": "var(--light2)",
        "green": "var(--green)",
        "grey": "var(--grey)",
      },
      backgroundImage: {
        "car-header-small": "url(/car-header-small.jpg)",
        "car-header-medium": "url(/car-header-medium.jpg)",
        "car-header-big": "url(/car-header-big.jpg)",
      },
      padding: {
        section: "3.75rem",
      },
      margin: {
        title: "3.75rem"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
