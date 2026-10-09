import { createTheme } from '@shopify/restyle';
import { DeviceHelper } from '@src/utils';

const darkPalette = {
  navyDeep:    '#0f172a',
  navyMid:     '#1e293b',
  navyLight:   '#334155',
  greenAccent: '#22c55e',
  greenDark:   '#16a34a',
  textWhite:   '#f1f5f9',
  textGray:    '#94a3b8',
  textLight:   '#64748b',
  white:       '#FFFFFF',
  black:       '#0f172a',
  red:         '#ef4444',
  lightRed:    '#7f1d1d',
  yellowAmber: '#FFA726',
  greenLight:  '#14532d',
  gray:        '#334155',
  divider:     '#334155',
};

const darkTheme = createTheme({
  colors: {
    textPrimary:     darkPalette.textWhite,
    textSecondary:   darkPalette.textGray,
    textTernary:     darkPalette.white,

    primary:         darkPalette.greenAccent,
    primaryDark:     darkPalette.greenDark,

    mainBackground:  darkPalette.navyDeep,
    darkHeader:      darkPalette.navyDeep,
    darkHeaderLight: darkPalette.navyMid,
    white:           darkPalette.navyMid,
    black:           darkPalette.textWhite,
    card:            darkPalette.navyMid,

    border:          darkPalette.navyLight,
    tabgray:         darkPalette.navyLight,
    divider:         darkPalette.divider,

    icon:            darkPalette.textGray,

    warning:         darkPalette.red,
    lightRed:        darkPalette.lightRed,
    green:           darkPalette.greenDark,
    sucess:          darkPalette.greenLight,
    yellow:          darkPalette.yellowAmber,

    gray:            darkPalette.gray,
  },

  spacing: {
    n:    -30,
    xs:   4,
    s:    8,
    m:    16,
    l:    24,
    xl:   32,
    xxl:  40,
    xxxl: 110,
    dl:   150,
  },

  borderRadii: {
    xs:    4,
    s:     10,
    m:     16,
    l:     24,
    xl:    32,
    round: 50,
  },

  textVariants: {
    defaults: {
      color:    'textPrimary',
      fontSize: DeviceHelper.calWidth(16),
    },
    title: {
      fontSize:   DeviceHelper.calWidth(30),
      fontWeight: '700',
      color:      'textPrimary',
    },
    subtitle: {
      fontSize:   DeviceHelper.calWidth(18),
      fontWeight: '700',
      color:      'textPrimary',
    },
    heading: {
      fontSize:   DeviceHelper.calWidth(22),
      fontWeight: '700',
      color:      'textPrimary',
    },
    description: {
      fontSize:   DeviceHelper.calWidth(16),
      fontWeight: '400',
      color:      'textSecondary',
    },
    body: {
      fontSize:   DeviceHelper.calWidth(16),
      fontWeight: '600',
      color:      'textPrimary',
    },
    medium: {
      fontSize:   DeviceHelper.calWidth(14),
      fontWeight: '500',
      color:      'textSecondary',
    },
    button: {
      fontSize:   DeviceHelper.calWidth(16),
      fontWeight: '700',
      color:      'white',
    },
    rupees: {
      fontSize:   DeviceHelper.calWidth(14),
      fontWeight: '700',
      color:      'primary',
    },
    small: {
      fontSize:   DeviceHelper.calWidth(12),
      fontWeight: '400',
      color:      'textSecondary',
    },
  },
});

export type DarkTheme = typeof darkTheme;
export default darkTheme;
