import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MuestrasAnalizadasService } from './muestras_analizadas.service';
import { CreateMuestrasAnalizadaDto } from './dto/create-muestras_analizada.dto';
import { UpdateMuestrasAnalizadaDto } from './dto/update-muestras_analizada.dto';

@Controller('muestras-analizadas')
export class MuestrasAnalizadasController {
  constructor(
    private readonly muestrasAnalizadasService: MuestrasAnalizadasService,
  ) {}

  @Post()
  create(@Body() createMuestrasAnalizadaDto: CreateMuestrasAnalizadaDto) {
    return this.muestrasAnalizadasService.create(createMuestrasAnalizadaDto);
  }

  @Get()
  findAll() {
    return this.muestrasAnalizadasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.muestrasAnalizadasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMuestrasAnalizadaDto: UpdateMuestrasAnalizadaDto,
  ) {
    return this.muestrasAnalizadasService.update(
      id,
      updateMuestrasAnalizadaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.muestrasAnalizadasService.remove(id);
  }
}
