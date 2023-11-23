import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MuestrasService } from './muestras.service';
import { CreateMuestraDto } from './dto/create-muestra.dto';
import { UpdateMuestraDto } from './dto/update-muestra.dto';

@Controller('muestras')
export class MuestrasController {
  constructor(private readonly muestrasService: MuestrasService) {}

  @Post()
  create(@Body() createMuestraDto: CreateMuestraDto) {
    return this.muestrasService.create(createMuestraDto);
  }

  @Get()
  findAll() {
    return this.muestrasService.findAll();
  }
  @Get('last')
  findLast() {
    return this.muestrasService.findLast();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.muestrasService.findOne(id);
  }
  @Get('/codigo/:id')
  findOneByCodigo(@Param('id') codigo: string) {
    return this.muestrasService.findOneByCodigo(codigo);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMuestraDto: UpdateMuestraDto) {
    return this.muestrasService.update(id, updateMuestraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.muestrasService.remove(id);
  }
}
