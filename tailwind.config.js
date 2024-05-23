/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        regular: "450",
      },
      colors: {
        primary: "#002A52",
        secondary: "#2E577C",
        tertiary: "#6D91B2",
        "brand-primary": "#052460",
        "brand-secondary": "#036FD0",
        "brand-tertiary": "#00AEEF",
        "brand-surface": "#E6F1FA",
        critical: "#DF1B41",
        "critical-primary": "#B3093C",
        "dark-neutral": "#002A52",
        "medium-brand": "#036FD0",
        "subtle-neutral": "#F2F6FA",
        "surface-neutral": "#D4DFE9",
      },
      borderColor: {
        default: "#D4DFE9",
      },
    },
  },
  plugins: [],
};
