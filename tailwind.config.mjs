/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'light-bg': '#F8F7F4',
        'light-text': '#050505',
        'light-accent': '#6A5ACD',
        'light-card': '#FFFFFF',
        'light-border': '#E5E7EB',
        'dark-bg': '#111827',
        'dark-text': '#E5E7EB',
        'dark-accent': '#8B5CF6',
        'dark-card': '#1F2937',
        'dark-border': '#374151',
      }
    }
  },
  plugins: [],
} 