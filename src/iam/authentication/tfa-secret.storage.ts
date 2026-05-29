import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class TfaSecretStorage
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private redisClient: Redis;

  constructor(private readonly configService: ConfigService) {}

  onApplicationBootstrap() {
    this.redisClient = new Redis({
      host: this.configService.getOrThrow<string>('redis.host'),
      port: this.configService.getOrThrow<number>('redis.port'),
    });
  }

  onApplicationShutdown() {
    return this.redisClient.quit();
  }

  async insert(userId: number, secret: string): Promise<void> {
    // Store with a TTL of 5 minutes (300 seconds)
    await this.redisClient.set(this.getKey(userId), secret, 'EX', 300);
  }

  async get(userId: number): Promise<string | undefined> {
    return await this.redisClient.get(this.getKey(userId));
  }

  async invalidate(userId: number): Promise<void> {
    await this.redisClient.del(this.getKey(userId));
  }

  private getKey(userId: number): string {
    return `tfa-secret-pending-${userId}`;
  }
}
