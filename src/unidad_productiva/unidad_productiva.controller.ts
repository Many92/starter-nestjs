import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UnidadProductivaService } from './unidad_productiva.service';
import { CreateUnidadProductivaDto } from './dto/create-unidad_productiva.dto';
import { UpdateUnidadProductivaDto } from './dto/update-unidad_productiva.dto';

@Controller('unidad-productiva')
export class UnidadProductivaController {
  constructor(
    private readonly unidadProductivaService: UnidadProductivaService,
  ) {}

  @Post()
  create(@Body() createUnidadProductivaDto: CreateUnidadProductivaDto) {
    return this.unidadProductivaService.create(createUnidadProductivaDto);
  }

  @Get()
  findAll() {
    return this.unidadProductivaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unidadProductivaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUnidadProductivaDto: UpdateUnidadProductivaDto,
  ) {
    return this.unidadProductivaService.update(id, updateUnidadProductivaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unidadProductivaService.remove(id);
  }
}
