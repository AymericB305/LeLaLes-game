import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        nevada: {
          50: '#f4f6f7',
          100: '#e3e8ea',
          200: '#cad2d7',
          300: '#a6b4ba',
          400: '#798d97',
          500: '#5d707a',
          600: '#515f69',
          700: '#465058',
          800: '#3e464c',
          900: '#373d42',
          950: '#22262a',
        },
        'my-primary': {
          50: "#EDF4F7",
          100: "#D8E6EE",
          200: "#ADCBDC",
          300: "#71A4C1",
          400: "#386681",
          500: "#335D75",
          600: "#2E556B",
          700: "#28495C",
          800: "#203B4B",
          900: "#172A35",
          950: "#0F1C24"
        }
      }
    }
  }
}
