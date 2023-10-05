import { Test, TestingModule } from '@nestjs/testing';
import { ExampleResourceService } from './exampleResource.service';

describe('ExampleResourceService', () => {
  let service: ExampleResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleResourceService],
    }).compile();

    service = module.get<ExampleResourceService>(ExampleResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
