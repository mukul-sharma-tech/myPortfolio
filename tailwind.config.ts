import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#3F8B8B',
        foreground: '#FFFFFF',
        primaryAccent: '#E6C5B3',
        charcoal: '#1A1A1A',
        navy: '#1D1B4D',
        translucentWhite: 'rgba(255, 255, 255, 0.7)',
        card: { DEFAULT: '#ffffff', foreground: '#1A1A1A' },
        popover: { DEFAULT: '#ffffff', foreground: '#1A1A1A' },
        primary: { DEFAULT: '#E6C5B3', foreground: '#1A1A1A' },
        secondary: { DEFAULT: '#ffffff', foreground: '#3F8B8B' },
        muted: { DEFAULT: 'rgba(255, 255, 255, 0.1)', foreground: 'rgba(255, 255, 255, 0.7)' },
        accent: { DEFAULT: '#E6C5B3', foreground: '#1A1A1A' },
        destructive: { DEFAULT: '#ff4d4f', foreground: '#ffffff' },
        border: 'rgba(255, 255, 255, 0.1)',
        input: 'rgba(255, 255, 255, 0.1)',
        ring: '#E6C5B3',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
