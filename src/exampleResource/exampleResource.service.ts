import { Injectable } from '@nestjs/common';
import { CreateExampleresourceDto } from './dto/create-exampleResource.dto';
import { UpdateExampleResourceDto } from './dto/update-exampleResource.dto';

@Injectable()
export class ExampleResourceService {
  create(createExampleResource: CreateExampleresourceDto) {
    return 'This action adds a new example resource';
  }

  findAll() {
    return `This action returns all example resources`;
  }

  findOne(id: number) {
    return `This action returns #${id} example resource`;
  }

  update(id: number, updateExampleResource: UpdateExampleResourceDto) {
    return `This action updates #${id} example resource`;
  }

  remove(id: number) {
    return `This action removes #${id} example resource`;
  }
}
