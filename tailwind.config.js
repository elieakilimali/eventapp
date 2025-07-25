 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            'sans': ['Manrope', 'sans-serif'],
            'display': ['Clash Display', 'sans-serif'],
        },
        colors: {
            'luxury': {
                'gold': '#D4AF37',
                'navy': '#0A1A2F',
                'slate': '#1E293B',
                'cream': '#F8F4E9',
            },
            'accent': {
                DEFAULT: '#2563EB',
                'light': '#3B82F6',
            }
        },
        animation: {
            'float-slow': 'float 10s ease-in-out infinite',
            'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
            float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-15px)' },
            }
        }
    }
},
  plugins: [],
}

