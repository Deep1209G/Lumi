export type SettingKey =
  | 'twoFactor'
  | 'biometric'
  | 'ads'
  | 'analytics';

export type PrivacySetting = {
  id: SettingKey;
  title: string;
  description: string;
};

export const accountSecurity: PrivacySetting[] = [
  {
    id: 'twoFactor',
    title: 'Two-factor authentication',
    description: 'Extra protection on sign in',
  },
  {
    id: 'biometric',
    title: 'Biometric login',
    description: 'Use Face ID or fingerprint',
  },
];

export const dataPrivacy: PrivacySetting[] = [
  {
    id: 'ads',
    title: 'Personalised ads',
    description: 'Let us tailor ads to your interests',
  },
  {
    id: 'analytics',
    title: 'Analytics sharing',
    description: 'Help improve the LUMI experience',
  },
];