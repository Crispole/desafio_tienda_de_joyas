import dotenv from 'dotenv';
import pg from 'pg';
import { format } from 'pg-format';

dotenv.config();

function getDbConfig() {
  const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  const pool = new pg.Pool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  });

  return {
    pool,
    format,
  };
}

export default getDbConfig;