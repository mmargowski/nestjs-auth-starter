import { registerAs } from '@nestjs/config';

export default registerAs('redis', () => {
  const port = parseInt(process.env.REDIS_PORT, 10);
  return {
    host: process.env.REDIS_HOST || 'localhost',
    port: isNaN(port) ? 6379 : port,
  };
});
