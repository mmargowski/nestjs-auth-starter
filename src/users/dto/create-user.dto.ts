import { PartialType } from '@nestjs/swagger';
import { SignUpDto } from 'src/iam/authentication/dto/sign-up.dto';
import { Role } from '../enums/role.enum';
import { IsEnum } from 'class-validator';

export class CreateUserDto extends PartialType(SignUpDto) {
  @IsEnum(Role)
  role: Role;
}
