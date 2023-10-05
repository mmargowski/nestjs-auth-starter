import { Injectable } from '@nestjs/common';
import { HashingService } from '../hashing/hashing.service';
import { GenerateApiKeyPayload } from './interfaces/generate-api-key-payload.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class ApiKeysService {
  constructor(private readonly hashingService: HashingService) {}

  async createAndHash(id: number): Promise<GenerateApiKeyPayload> {
    const apiKey = this.generateApiKey(id);
    const hashedKey = await this.hashingService.hash(apiKey);
    return { apiKey, hashedKey };
  }

  async validate(apiKey: string, hashedKey: string) {
    return this.hashingService.compare(apiKey, hashedKey);
  }

  extractIdFromApiKey(apiKey: string): string {
    const [id] = Buffer.from(apiKey, 'base64').toString('ascii').split('-');
    return id;
  }

  private generateApiKey(id: number): string {
    const apikKey = `${id}-${randomUUID()}`;
    return Buffer.from(apikKey).toString('base64');
  }
}
