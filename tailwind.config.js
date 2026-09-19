/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sabol: {
          navy: {
            950: '#040d1a',
            900: '#07162c',
            800: '#0c2346',
            700: '#133568',
            600: '#1b4a8e',
          },
          blue: {
            DEFAULT: '#1a65d6',
            hover: '#1350ad',
            light: '#3b82f6',
            bright: '#2563eb',
            vibrant: '#0284c7',
          },
          aqua: {
            DEFAULT: '#00b4d8',
            light: '#48cae4',
            soft: '#90e0ef',
            ice: '#caf0f8',
            tint: '#e8f7fa',
          },
          ice: {
            50: '#f4f9fd',
            100: '#e7f3fc',
            200: '#cbe4f8',
            300: '#9ecdf3',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'water': '0 8px 32px -4px rgba(0, 180, 216, 0.15)',
        'water-lg': '0 20px 40px -8px rgba(6, 78, 140, 0.18)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
        'glow': '0 0 25px rgba(0, 180, 216, 0.35)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'ripple': 'ripple 3s cubic-bezier(0, 0.2, 0.8, 1) infinite',
        'wave': 'wave 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.98)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
