/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        cream: '#f8f7f4',
        ink: '#1c1917',
        muted: '#78716c',
        dim: '#a8a29e',
        border: '#e7e5e4',
        accent: {
          DEFAULT: '#7c3aed',
          light: '#ede9fe',
          dark: '#5b21b6',
        },
      },
    },
  },
  plugins: [],
}

