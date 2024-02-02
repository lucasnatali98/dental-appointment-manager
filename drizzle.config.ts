import dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

dotenv.config();
export default {
  schema: [
    './db/appointment.ts',
    './db/doctor.ts',
    './db/patient.ts',
    './db/times.ts'
  ],
  out: './drizzle',
  driver: 'mysql2', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    host: process.env.DB_HOST ?? '',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME ?? '',
  },
} satisfies Config;