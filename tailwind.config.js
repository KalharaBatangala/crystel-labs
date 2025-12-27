/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarBg: "var(--color-navbar-bg)",
        textPrimary: "var(--color-text-primary)",
        textSecondary: "var(--color-text-secondary)",
      },
    },
  },
  plugins: [],
}

