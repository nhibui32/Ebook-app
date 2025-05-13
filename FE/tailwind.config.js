// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        secondary:"rgba(var(--secondary))",
        background:"rgba(var(--background))",
        containerBackground:"rgba(var(--containerBackground))",
        primaryText:"rgba(var(--primaryText))",
        secondaryText:"rgba(var(--secondaryText))",
        border:"rgba(var(--border))",
        hoverBackground: "rgba(var(--hoverBackground))",
        headerBackground: "rgba(var(--headerBackground))",
      },
      screens: {
        desktop: '1440px',
      },
    },
  },
  plugins: [],
}
