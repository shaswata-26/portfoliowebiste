import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#0b1224',
        foreground: '#f8fafc',
        muted: '#94a3b8',
        accent: '#8b5cf6',
        cyan: '#22d3ee'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(139,92,246,0.18), 0 18px 60px rgba(34,211,238,0.14)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.15) 1px, transparent 0)',
      }
    },
  },
  plugins: [],
};

export default config;
