/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
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
        'light-gray': '#6B7280',
        'light-gray-light': '#9CA3AF',
        'light-gray-dark': '#374151',
        'dark-bg': '#0F172A',
        'dark-text': '#F8FAFC',
        'dark-accent': '#8B5CF6',
        'dark-card': '#1E293B',
        'dark-border': '#334155',
        'dark-gray': '#94A3B8',
        'dark-gray-light': '#64748B',
        'dark-gray-dark': '#CBD5E1',
      }
    }
  },
  plugins: [],
} 