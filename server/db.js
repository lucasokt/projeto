const mysql = require('mysql2/promise');

const {
  DB_HOST = '127.0.0.1',
  DB_PORT = '3306',
  DB_NAME = 'bolo',
  DB_USER,
  DB_PASSWORD,
  DB_SSL,
  DB_SSL_CA,
} = process.env;

if (!DB_USER || !DB_PASSWORD) {
  throw new Error('Configure DB_USER e DB_PASSWORD no ambiente do backend.');
}

const usarTls = process.env.VERCEL === '1' || DB_SSL === 'true';

module.exports = mysql.createPool({
  host: DB_HOST,
  port: Number(DB_PORT),
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
  ssl: usarTls ? {
    rejectUnauthorized: true,
    verifyIdentity: true,
    ca: DB_SSL_CA?.replace(/\\n/g, '\n'),
  } : undefined,
  connectionLimit: 4,
  connectTimeout: 3000,
});
