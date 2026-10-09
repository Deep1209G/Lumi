import { createTheme } from '@shopify/restyle';
import { DeviceHelper } from '@src/utils';

const palette = {
  // Core green-dark palette
  darkNavy:        '#111827',
  darkNavyLight:   '#1f2937',
  greenAccent:     '#22c55e',
  greenDark:       '#16a34a',
  pageBackground:  '#f2f4f7',
  borderLight:     '#e5e7eb',
  textDark:        '#111827',
  textMuted:       '#6b7280',
  textLight:       '#9ca3af',

  // Neutrals
  white:           '#FFFFFF',
  black:           '#000000',

  // Status
  red:             '#ef4444',
  lightRed:        '#fee2e2',
  yellowAmber:     '#FFA726',
  greenLight:      '#dcfce7',

  // Translucent
  whiteMuted:      'rgba(255,255,255,0.5)',
  greenTint:       'rgba(34,197,94,0.15)',

  // Misc
  gray:            '#E8E8E8',
  divider:         '#e5e7eb',
};

const theme = createTheme({
  colors: {
    // Text
    textPrimary:     palette.textDark,
    textSecondary:   palette.textMuted,
    textTernary:     palette.white,
    textOnDarkMuted: palette.whiteMuted,

    // Brand
    primary:         palette.greenAccent,
    primaryDark:     palette.greenDark,
    primaryTint:     palette.greenTint,

    // Surfaces
    mainBackground:  palette.pageBackground,
    darkHeader:      palette.darkNavy,
    darkHeaderLight: palette.darkNavyLight,
    white:           palette.white,
    black:           palette.black,
    card:            palette.white,

    // Borders / separators
    border:          palette.borderLight,
    tabgray:         palette.borderLight,
    divider:         palette.divider,

    // Icons
    icon:            palette.textMuted,

    // Status
    warning:         palette.red,
    lightRed:        palette.lightRed,
    green:           palette.greenDark,
    sucess:          palette.greenLight,
    yellow:          palette.yellowAmber,

    // Misc
    gray:            palette.gray,
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

export type Theme = typeof theme;
export default theme;
