/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.ts", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        btnLoader: {
          "0%, 100%": { transform: "scale(0.6)" },
          "50%": { transform: "scale(1.2)" },
        },

        showToast: {
          "0%": { transform: "translateX(20px)" },
          "100%": { transform: "translateX(0)" },
        },
        hideToast: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(20px)" },
        },
      },
      animation: {
        btnLoader: "1s ease-in infinite btnLoader",
        showToast: "0.2s ease-in 1 forwards showToast",
        hideToast: "0.2s ease-in 1 forwards hideToast",
      },
    },
  },
  plugins: [],
};
