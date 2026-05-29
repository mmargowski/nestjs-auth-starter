import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  const port = parseInt(process.env.DATABASE_PORT, 10);
  return {
    host: process.env.DATABASE_HOST || 'localhost',
    port: isNaN(port) ? 5555 : port,
    user: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'pass123',
    name: process.env.DATABASE_NAME || 'postgres',
  };
});
