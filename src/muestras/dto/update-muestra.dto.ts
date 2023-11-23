import { PartialType } from '@nestjs/mapped-types';
import { CreateMuestraDto } from './create-muestra.dto';

export class UpdateMuestraDto extends PartialType(CreateMuestraDto) {}
