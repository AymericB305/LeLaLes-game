import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        bunker: {
          50: '#f5f8fa',
          100: '#e9eff5',
          200: '#cedee9',
          300: '#a3c1d6',
          400: '#72a2be',
          500: '#5086a7',
          600: '#3d6b8c',
          700: '#325672',
          800: '#2d4a5f',
          900: '#293f51',
          950: '#121b23',
        },
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
      
      }
    }
  }
}
