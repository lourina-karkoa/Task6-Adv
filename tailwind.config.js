/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode :'class',
  theme: {
    extend: {
      colors: {
        'darkMode': '#090D1F',
        'nav' : '#1A1A1A',
        'barbar' : '#6941C6',
        'gray-obacity': '#667085',
        'gray-dark' :'#C0C5D0',
        'btn-blue' : '#026AA2',
        'btn-rose' : '#FDF2FA',
        'btn-bink' : '#C11574',
        'emerald-51' : '#ECFDF3',
        'btn-green' : '#027A48',
        'btn-barbr' : '#F9F5FF',
        'btn-sky-blue' : '#EEF4FF',
        'sky-850' :'#3538CD',
        'neutral-450' : '#667085',
        'indigo-850' : '#7F56D9',
      },
      spacing: {
        '29': '120px',
        '13' : '54px',
        '15' : '60px',
        '7.5' : '30px',
        '10m' : '81.5%',
        '10.5': '85%',
        '62' : '248px',
        '2.5' : '10px',
        '12.5' : '50px',
      },
      maxWidth: {
        '592': '592px',
      },
      fontFamily: {
        "inter": ["Inter"]
    },
    fontSize: {
      '100' : '17vw'
    }    
    },
  },
  plugins: [],
}

