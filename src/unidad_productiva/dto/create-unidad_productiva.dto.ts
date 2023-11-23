import { IsString } from 'class-validator';

export class CreateUnidadProductivaDto {
  @IsString()
  tipo: string;
  @IsString()
  nombre: string;
}
