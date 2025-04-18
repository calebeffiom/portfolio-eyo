import type { Config } from 'tailwindcss'

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
      screens: {
        // max-width based breakpoints
        'xs':{'min': '460px'},
        'max-xs': {'max': '460px'},
        'max-sm': { 'max': '640px' },
        'max-md': { 'max': '768px' },
        'max-lg': { 'max': '1024px' },
        'max-xl': { 'max': '1280px' },
      },
      keyframes: {
        // Custom bounce: starts at 0, lifts up 50px at 50%, back at 100%
        bounceCustom: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-50px)' },
        },
      },
      animation: {
        // name      | keyframes        | duration | easing          | repeat
        bounceCustom: 'bounceCustom 1s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
}
export default config
