import { createTheme } from '@shopify/restyle';
import { DeviceHelper } from '@src/utils';

const palette = {
  coral: '#FF6B4A',
  peach: '#fcdbcf',
  yellowAmber: '#FFA726',
  background: '#FFF7F4',
  white: '#FFFFFF',
  black: '#000000',
  gray100: '#A3A3A3',
  gray200: '#8E8E93',
  gray300: '#757575',
  border: '#d0d0d0',
  divider: '#E7E7E7',
  greenLight: '#def5e8',
  red: '#de0a26',
  lightRed: '#efd1d1',
  greenDark: '#0A906E',

  purpleMauve: '#E0B0FF',
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',
  greenPrimary: '#0ECD9D',
  gray: '#E8E8E8',
  simpleGray: '#676765',
};

const theme = createTheme({
  colors: {
    textPrimary: palette.black,
    textSecondary: palette.gray300,
    textTernary: palette.white,

    primary: palette.coral,
    border: palette.border,

    tabgray: palette.peach,
    icon: palette.gray200,

    black: palette.black,
    white: palette.white,
    mainBackground: palette.white,

    lightRed: palette.lightRed,
    warning: palette.red,

    green: palette.greenDark,
    yellow: palette.yellowAmber,
    card: palette.purpleMauve,
    gray: palette.gray,

    sucess: palette.greenLight,
  },

  spacing: {
    n: -30,
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
    round: 50,
  },
  textVariants: {
    defaults: {
      color: 'textPrimary',
      fontSize: DeviceHelper.calWidth(16),
    },

    title: {
      fontSize: DeviceHelper.calWidth(30),
      fontWeight: '500',
      color: 'textPrimary',
    },

    subtitle: {
      fontSize: DeviceHelper.calWidth(18),
      color: 'textPrimary',
      fontWeight: '600',
    },
    heading: {
      fontSize: DeviceHelper.calWidth(22),
      color: 'textPrimary',
      fontWeight: '600',
    },

    description: {
      fontSize: DeviceHelper.calWidth(16),
      fontWeight: '400',
      color: 'textSecondary',
    },

    body: {
      fontSize: DeviceHelper.calWidth(16),
      color: 'textPrimary',
      fontWeight: '600',
    },
    medium: {
      fontSize: DeviceHelper.calWidth(14),
      color: 'textSecondary',
      fontWeight: '500',
    },

    button: {
      fontSize: DeviceHelper.calWidth(16),
      fontWeight: '600',
      color: 'textPrimary',
    },

    rupees: {
      fontSize: DeviceHelper.calWidth(14),
      fontWeight: '700',
      color: 'textPrimary',
    },
    small: {
      fontSize: DeviceHelper.calWidth(12),
      fontWeight: '350',
      color: 'textPrimary',
    },
  },
});

export type Theme = typeof theme;
export default theme;
