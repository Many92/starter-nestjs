import { PartialType } from '@nestjs/mapped-types';
import { CreateMuestrasAnalizadaDto } from './create-muestras_analizada.dto';

export class UpdateMuestrasAnalizadaDto extends PartialType(CreateMuestrasAnalizadaDto) {}
