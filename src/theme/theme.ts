import { createTheme } from '@shopify/restyle';

const palette = {
  purpleMauve: '#E0B0FF',
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',
  yellowAmber: '#ffbf00',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#000000',
  white: '#FFFFFF',
  gray: '#E8E8E8',
  simpleGray: '#676765',
  red: '#de0a26',
  lightRed:"#efd1d1"
};

const theme = createTheme({
  colors: {
    black: palette.black,
    white: palette.white,
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    textPrimary: palette.black,
    textSecondary: palette.simpleGray,
    border: palette.gray,
    warning: palette.red,
    green: palette.greenDark,
    yellow: palette.yellowAmber,
    card: palette.purpleMauve,
    gray: palette.gray,
    lightRed:palette.lightRed,
    icon:palette.simpleGray,
  },

  spacing: {
    n:-30,
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
      fontWeight: '600',
    },
    heading: {
      fontSize: 25,
      color: 'textPrimary',
      fontWeight: '600',
    },

    description: {
      fontSize: 16,
      fontWeight: '400',
      color: 'textSecondary',
    },

    body: {
      fontSize: 16,
      color: 'textPrimary',
      fontWeight: '600',
    },
    medium: {
      fontSize: 14,
      color: 'textSecondary',
      fontWeight: '500',
    },

    button: {
      fontSize: 16,
      fontWeight: '600',
      color: 'textPrimary',
    },

    rupees: {
      fontSize: 14,
      fontWeight: '700',
      color: 'textPrimary',
    },
  },
});

export type Theme = typeof theme;
export default theme;
