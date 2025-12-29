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
      cursor:{
      'custom-arrow': 'url(/cursor.png), default',
      'custom-pointer': 'url(/pointer.png), default',
      'custom-type': 'url(/type.png), text',
    },
    fontFamily:{
      'roboto-slab': ['var(--font-roboto-slab)', 'serif'],
    }
    
  },
  plugins: [],
}
}