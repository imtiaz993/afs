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
        "subtle-neutral": "#F2F6FA",
        "surface-neutral": "#D4DFE9",
        "dark-neutral": "#002A52",
        "critical-primary": "#B3093C",
      },
      borderColor: {
        default: "#D4DFE9",
      },
    },
  },
  plugins: [],
};
