import { PartialType } from '@nestjs/swagger';
import { CreateExampleresourceDto } from './create-exampleResource.dto';

export class UpdateExampleResourceDto extends PartialType(
  CreateExampleresourceDto,
) {}
