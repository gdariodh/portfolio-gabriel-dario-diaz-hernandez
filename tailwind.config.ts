import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: '#2DD881',
        secondary: '#1C0B19',
        accent: '#F5F5F5',
        'bg-input': '#F5F5F5',
        'dark-purple': '#1C0B19',
        'federal-blue': '#140D4F',
        keppel: '#4EA699',
        esmerald: '#2DD881',
        aquamarine: '#6FEDB7',
        'text-white': {
          60: 'rgba(255, 255, 255, 0.6)',
          85: 'rgba(255, 255, 255, 0.85)',
          90: 'rgba(255, 255, 255, 0.9)',
          100: 'rgba(255, 255, 255, 1)',
        },
        'text-black': {
          60: 'rgba(0, 0, 0, 0.6)',
          85: 'rgba(0, 0, 0, 0.85)',
          90: 'rgba(0, 0, 0, 0.9)',
          100: 'rgba(0, 0, 0, 1)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
