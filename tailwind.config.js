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
        customLightgreen:"#6A9C89",
        customLightgreen2:"#E9EFEC",
        customLightgreen3:"#456863",
        customLightgreen4:"#CFFFE9",
        customGreen:"#16423C",
        customGreen2:"#21635A",
        customAlgaegreen:"#48490F",
        customAlgaegreen2:"#908E6C",

      },
       screens: {
        'custom': '1000px',
        'xsm':'380px'
      },
    },
  },
  plugins: [],
};
