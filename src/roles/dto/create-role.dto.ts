import { IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  rol: string;
  @IsString()
  description: string;
}
