const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        fontFamily: {
            primary: ["RedVevet", 'serif'],
            body: ["'Albert Sans'", 'sans-serif'],
            secondary: ["'Roboto Mono'", 'sans-serif']
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1rem',
                lg: '1rem',
                xl: '1rem',
                '2xl': '6rem',
            }
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#32312C',
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            red: colors.red,
            primary: '#1C2C1F',
            secondary: '#B39D7E'
        },
        screens: {
            '2xl': { max: '1536' },
            xl: { max: '1280px' },
            lg: { max: '1024px' },
            md: { max: '768px' },
            sm: { max: '640px' },

            minsm: { min: '640px' },
            minmd: { min: '768px' },
            minlg: { min: '1024px' },
            minxl: { min: '1280px' },
            min2xl: { min: '1536px' }
        }
    }
}
