import { env } from '@/env';
import { type SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'next starter',
  author: 'NerdyNarayan',
  description: 'A starter template for Next.js',
  keywords: [
    'next.js',
    'typescript',
    'react',
    'starter',
    'shadcn',
    'husky',
    'lint-staged',
    'prettier',
    'drizzle'
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: 'https://my-portfolio-delta-blue-89.vercel.app/'
  },
  links: {
    github: 'https://github.com/NerdyNarayan/next-starter'
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`
};
