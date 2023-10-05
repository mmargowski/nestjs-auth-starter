import { PartialType } from '@nestjs/swagger';
import { IsNumberString, IsOptional } from 'class-validator';
import { SignUpDto } from './sign-up.dto';

export class SignInDto extends PartialType(SignUpDto) {
  @IsOptional()
  @IsNumberString()
  tfaCode?: string;
}
