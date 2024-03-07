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
          "0%": { transform: "translateX(15px)" },
          "50%": { transform: "translateX(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        btnLoader: "1s ease-in infinite btnLoader",
        showToast: "0.5s ease-in 1 forwards showToast",
      },
    },
  },
  plugins: [],
};
