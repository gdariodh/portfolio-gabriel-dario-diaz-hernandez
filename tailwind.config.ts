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
        primary: '#EB3678',
        secondary: '#1C0B19',
        accent: '#F5F5F5',
        background: '#F5F5F5',
        esmerald: '#2DD881',
      },
    },
  },
  plugins: [],
};
export default config;
