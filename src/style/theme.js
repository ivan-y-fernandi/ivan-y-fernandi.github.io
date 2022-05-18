import { transparentize } from 'polished';

export const theme = {
  colors: {
    white: '#fff',
    textDefault: '#2f2f2f',
    primary: '#90B89B',
    secondary: '#d7c09e',
    cardBackground: transparentize(0.08, '#fff'),
  },
  shadow: {
    default: '3px 2px 16px -3px rgba(74,74,74,0.75)',
  },
  fonts: {
    default: 'PTRegular',
    sans: 'Quicksand',
    italic: 'Breetty',
  }
};
