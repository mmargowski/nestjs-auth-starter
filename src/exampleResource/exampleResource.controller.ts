import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExampleResourceService } from './exampleResource.service';
import { Roles } from 'src/iam/authorization/decorators/roles.decorator';
import { Role } from 'src/users/enums/role.enum';
import { Auth } from 'src/iam/authentication/decorators/auth.decorator';
import { AuthType } from 'src/iam/authentication/enums/auth-type.enum';
import { CreateExampleresourceDto } from './dto/create-exampleResource.dto';
import { UpdateExampleResourceDto } from './dto/update-exampleResource.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('ExampleResource')
@ApiBearerAuth('jwt')
@Auth(AuthType.Bearer)
@Controller('example')
export class ExampleResourceController {
  constructor(
    private readonly exampleResourceService: ExampleResourceService,
  ) {}

  @Post()
  create(@Body() createExampleResource: CreateExampleresourceDto) {
    return this.exampleResourceService.create(createExampleResource);
  }

  @Get()
  findAll() {
    return this.exampleResourceService.findAll();
  }

  @Auth(AuthType.None)
  @Get('public')
  findAllPublic() {
    return this.exampleResourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exampleResourceService.findOne(+id);
  }

  @Roles(Role.Admin)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExampleResourceDto: UpdateExampleResourceDto,
  ) {
    return this.exampleResourceService.update(+id, updateExampleResourceDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exampleResourceService.remove(+id);
  }
}
