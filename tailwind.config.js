/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // ✅ App Router support
    "./pages/**/*.{js,ts,jsx,tsx}",         // ✅ Pages Router support
    "./components/**/*.{js,ts,jsx,tsx}",    // ✅ Shared components
    "./slices/**/*.{js,ts,jsx,tsx}",        // ✅ Prismic slices
    "./src/**/*.{js,ts,jsx,tsx,mdx}",       // ✅ your original path
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-alpino)", "sans-serif"],
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-left": "slide-left 3s linear infinite",
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
};