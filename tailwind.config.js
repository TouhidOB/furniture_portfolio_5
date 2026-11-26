/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gallery: '#F4F2EE',
        carbon: '#171717',
        concrete: '#D9D6D0',
        oxide: {
          DEFAULT: '#A14F39',
          hover: '#8C422E',
          light: '#F4EAE7',
        },
        walnut: '#634735',
        silver: '#A8A7A4',
        muted: '#74716C',
        'subtle-border': '#D8D4CE',
        'dark-stage': '#111111',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        interface: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.045em',
        tight: '-0.03em',
      },
      maxWidth: {
        editorial: '1480px',
      },
    },
  },
  plugins: [],
};
