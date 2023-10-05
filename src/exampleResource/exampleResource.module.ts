import { Module } from '@nestjs/common';
import { ExampleResourceService } from './exampleResource.service';
import { ExampleResourceController } from './exampleResource.controller';

@Module({
  controllers: [ExampleResourceController],
  providers: [ExampleResourceService],
})
export class ExampleResourceModule {}
