export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dots: {
          '0%, 20%': { content: "''" },
          '40%': { content: "'.'" },
          '60%': { content: "'..'" },
          '80%, 100%': { content: "'...'" },
        },
      },
      animation: {
        dots: 'dots 1.2s steps(4, end) infinite',
      },
    },
  },
  plugins: [],
}