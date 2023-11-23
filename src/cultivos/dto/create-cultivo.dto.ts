import { IsString } from 'class-validator';

export class CreateCultivoDto {
  @IsString()
  tipo: string;
}
