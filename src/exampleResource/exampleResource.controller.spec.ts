import { Test, TestingModule } from '@nestjs/testing';
import { ExampleResourceController } from './exampleResource.controller';
import { ExampleResourceService } from './exampleResource.service';

describe('ExampleResourceController', () => {
  let controller: ExampleResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleResourceController],
      providers: [ExampleResourceService],
    }).compile();

    controller = module.get<ExampleResourceController>(
      ExampleResourceController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
