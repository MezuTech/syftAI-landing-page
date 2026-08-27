/** Everything about the studio that appears in more than one place. */
export const site = {
  name: 'MezuTech',
  domain: 'syftup.com',
  url: 'https://syftup.com',
  /** Used as the <title> suffix and in structured data. */
  role: 'Independent software studio',
  tagline: 'Productivity apps, built one at a time.',
  description:
    'MezuTech is a one-person studio building productivity apps — ScriptureFlow, StrideAI, LoveStory and Sift AI. Flutter on the front, Supabase and Serverpod behind.',
  email: 'hello@syftup.com',
  github: 'https://github.com/MezuTech',
  /** Ordered — this is the nav. */
  nav: [
    { label: 'Apps', href: '/#apps' },
    { label: 'Craft', href: '/#craft' },
    { label: 'About', href: '/about' },
  ],
} as const;

export type Site = typeof site;
