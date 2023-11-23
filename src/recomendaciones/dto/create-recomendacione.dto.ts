import { IsString } from 'class-validator';
export class CreateRecomendacioneDto {
  @IsString()
  codigo: string;
  @IsString()
  nombre: string;
  @IsString()
  fosforo_evaluado: string;
  @IsString()
  formula_completa: string;
  @IsString()
  potacio_evaluado: string;
  @IsString()
  cloruro_potacio: string;
  @IsString()
  nitrato_amonio: string;
}
