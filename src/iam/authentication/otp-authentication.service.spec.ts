import { Test, TestingModule } from '@nestjs/testing';
import { OtpAuthenticationService } from './otp-authentication.service';

describe('OtpAuthenticationService', () => {
  let service: OtpAuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtpAuthenticationService],
    }).compile();

    service = module.get<OtpAuthenticationService>(OtpAuthenticationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
