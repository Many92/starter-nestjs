import { PartialType } from '@nestjs/mapped-types';
import { CreateDosiDto } from './create-dosi.dto';

export class UpdateDosiDto extends PartialType(CreateDosiDto) {}
