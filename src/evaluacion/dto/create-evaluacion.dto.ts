import { IsNumber, IsString } from 'class-validator';

export class CreateEvaluacionDto {
  @IsString()
  muestra_Id: string;
  @IsNumber()
  acides_php_agua: number;
  @IsNumber()
  acides_php_cp: number;
  @IsNumber()
  fosforo: number;
  @IsNumber()
  potacio: number;
  @IsNumber()
  materia_organica: number;
  @IsNumber()
  conducto_electrico: number;
}
