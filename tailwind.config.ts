import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Brand colors
        beige: {
          100: '#F5EEE6',
        },
        brown: {
          100: '#A87C7C',
          200: '#7E6363',
          300: '#503C3C',
          400: '#3E3232',
        },
        'dark-purple': '#1C0B19',
        'federal-blue': '#140D4F',
        keppel: '#4EA699',
        esmerald: '#2DD881',
        aquamarine: '#6FEDB7',
        ultraviolet: '#645E9D',
        russianviolet: '#261447',
      },
    },
  },
  plugins: [],
};
export default config;
