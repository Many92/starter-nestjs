import { IsString } from 'class-validator';

export class CreateMuestrasAnalizadaDto {
  @IsString()
  codigo: string;
  @IsString()
  nombre: string;
  @IsString()
  acides_php_agua: string;
  @IsString()
  acides_php_cp: string;
  @IsString()
  fosforo: string;
  @IsString()
  potacio: string;
  @IsString()
  materia_organica: string;
  @IsString()
  conducto_electrico: string;
}
