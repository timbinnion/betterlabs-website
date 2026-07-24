import type { ContactFormContent } from '../types';

export const contactForm: ContactFormContent = {
  nameLabel: 'Name',
  organisationLabel: 'Organisation / Company',
  emailLabel: 'Email',
  projectTypeLabel: 'Project type',
  projectTypePlaceholder: 'Select a project type',
  projectTypeOptions: [
    {
      value: 'circular-product-redesign',
      label: 'Circular product redesign',
    },
    {
      value: 'sustainable-strategy',
      label: 'Sustainable strategy',
    },
    {
      value: 'workshops-and-training',
      label: 'Workshops and training',
    },
    {
      value: 'other',
      label: 'Other',
    },
  ],
  messageLabel: 'Message',
  requiredHint: 'All fields are required.',
  submitLabel: 'Send enquiry',
};
