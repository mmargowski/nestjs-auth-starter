import { IsNotEmpty, IsString } from 'class-validator';

export class ActivateTfaDto {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  secret: string;
}
