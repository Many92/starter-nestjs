import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FertilizantesService } from './fertilizantes.service';
import { CreateFertilizanteDto } from './dto/create-fertilizante.dto';
import { UpdateFertilizanteDto } from './dto/update-fertilizante.dto';

@Controller('fertilizantes')
export class FertilizantesController {
  constructor(private readonly fertilizantesService: FertilizantesService) {}

  @Post()
  create(@Body() createFertilizanteDto: CreateFertilizanteDto) {
    return this.fertilizantesService.create(createFertilizanteDto);
  }

  @Get()
  findAll() {
    return this.fertilizantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fertilizantesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFertilizanteDto: UpdateFertilizanteDto,
  ) {
    return this.fertilizantesService.update(+id, updateFertilizanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fertilizantesService.remove(id);
  }
}
