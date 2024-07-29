import { type Config } from 'drizzle-kit';

import { env } from '@/env';

export default {
  schema: './src/server/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.NEXT_PUBLIC_DATABASE_URL
  },
  tablesFilter: ['next-starter_*']
} satisfies Config;
