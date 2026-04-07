/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: 'var(--surface)',
        'surface-container-low': 'var(--surface-container-low)',
        'surface-container-high': 'var(--surface-container-high)',
        'surface-container-highest': 'var(--surface-container-highest)',
        'surface-container-lowest': 'var(--surface-container-lowest)',
        primary: 'var(--primary)',
        'primary-dim': 'var(--primary-dim)',
        'on-primary': 'var(--on-primary)',
        secondary: 'var(--secondary)',
        'on-surface': 'var(--on-surface)',
        'on-surface-variant': 'var(--on-surface-variant)',
        'inverse-surface': 'var(--inverse-surface)',
        'outline-variant': 'var(--outline-variant)',
      },
      fontFamily: {
        headline: 'var(--font-headline)',
        body: 'var(--font-body)',
      },
      borderRadius: {
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        ambient: 'var(--shadow-ambient)',
      },
    },
  },
  plugins: [],
}
