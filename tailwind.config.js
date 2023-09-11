/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display: ['group-hover'],
      fontFamily: {
        'work-sans': ['"Work Sans"', ],
        'kanit': ['"Kanit"',],
        'lexend-mega': ['"Lexend Mega"',]

      }
    },
    // colors: {
    //   white: '#ffffff',
    //   blue: {
    //     medium: '#0095F6',
    //     press: '#0081f6'
    //   },
    //   black: {
    //     '#00000',
    //     light: '#262626',
    //     faded: '#00000059'
    //   },
    //   gray: {
    //     base: '#616161',
    //     background: '#fafafa',
    //     primary: '#dbdbdb',
    //     press: '#FCF6F6'
    //   },
    //   red: {
    //     primary: '#ed4956'
    //   }
    // },
  },
  plugins: [
  ],
}

