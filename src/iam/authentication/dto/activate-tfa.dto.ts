import { IsNotEmpty, IsString } from 'class-validator';

export class ActivateTfaDto {
  @IsNotEmpty()
  @IsString()
  code: string;
}
