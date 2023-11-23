import { PartialType } from '@nestjs/mapped-types';
import { CreateUnidadProductivaDto } from './create-unidad_productiva.dto';

export class UpdateUnidadProductivaDto extends PartialType(CreateUnidadProductivaDto) {}
