import { createTheme } from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
  gray: '#676765',
  red: '#de0a26',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    textPrimary: palette.black,
    textSecondary: palette.gray,
    warning: palette.red,
  },

  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
    xxxl: 110,
    dl: 150,
  },
  borderRadii: {
    xs: 4,
    s: 10,
    m: 16,
    l: 24,
    xl: 32,
  },
  textVariants: {
    defaults: {
      color: 'textPrimary',
      fontSize: 16,
    },

    title: {
      fontSize: 30,
      fontWeight: '500',
      color: 'textPrimary',
    },

    subtitle: {
      fontSize: 18,
      color: 'textPrimary',
      fontWeight: '500',
    },

    body: {
      fontSize: 16,
      color: 'textPrimary',
      fontWeight: '600',
    },
    medium: {
      fontSize: 14,
      color: 'textPrimary',
      fontWeight: '500',
    },

    button: {
      fontSize: 16,
      fontWeight: '600',
      color: 'textPrimary',
    },
  },
});

export type Theme = typeof theme;
export default theme;
