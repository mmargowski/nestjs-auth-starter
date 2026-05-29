import { ConfigService } from '@nestjs/config';
import { RefreshTokenIdsStorage } from './refresh-token-ids.storage';

describe('RefreshTokenIdsStorage', () => {
  let storage: RefreshTokenIdsStorage;
  let configService: ConfigService;

  beforeEach(() => {
    configService = {
      getOrThrow: jest.fn().mockImplementation((key: string) => {
        if (key === 'redis.host') return 'localhost';
        if (key === 'redis.port') return 6379;
      }),
    } as any;
    storage = new RefreshTokenIdsStorage(configService);
  });

  it('should be defined', () => {
    expect(storage).toBeDefined();
  });
});
