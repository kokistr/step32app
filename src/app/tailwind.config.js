/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#f97316', // orange-500
          hover: '#f59e0b', // orange-600
        },
      },
      spacing: {
        // カスタムスペーシングが必要な場合に追加
      },
      borderRadius: {
        // カスタムの角丸が必要な場合に追加
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // フォーム要素のスタイリングに便利
  ],
}