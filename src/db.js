import { createPool } from 'mysql2/promise';
import * as DB from './config.js';

export const pool = createPool({
  user:DB.DB_USER,
  password:DB.DB_PASSWORD,
  host:DB.DB_HOST,
  port:DB.DB_PORT,
  database:DB.DB_NAME
});

