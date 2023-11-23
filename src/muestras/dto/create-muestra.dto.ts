import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateMuestraDto {
  @IsString()
  codigo: string;
  @IsString()
  nombre: string;
  @IsString()
  apellidos: string;
  @IsString()
  ci: string;
  @Type(() => Date)
  @IsDate()
  fecha_entrada: Date | null;
  @IsString()
  base_productiva_Id: string;
  @IsString()
  cultivo_Id: string;
  @IsString()
  latitud: string;
  @IsString()
  longitud: string;
  @IsNumber()
  area: number;
  @IsString()
  tipo_suelo: string;
}
