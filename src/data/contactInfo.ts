export type ContactMethod = {
  id: string;
  icon: string;
  label: string;
  value: string;
  url: string;
};

// TODO: replace with real support contact details
export const contactInfo: ContactMethod[] = [
  {
    id: 'email',
    icon: 'mail-outline',
    label: 'emailUs',
    value: 'support@lumi.com',
    url: 'mailto:support@lumi.com',
  },
  {
    id: 'call',
    icon: 'call-outline',
    label: 'callUs',
    value: '+91 98765 43210',
    url: 'tel:+919876543210',
  },
  {
    id: 'website',
    icon: 'globe-outline',
    label: 'visitWebsite',
    value: 'www.lumi.com',
    url: 'https://www.lumi.com',
  },
];
