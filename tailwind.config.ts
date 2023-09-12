import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [],
  darkMode: ['class', '[data-color-scheme="dark"]'],
}

export default config;
