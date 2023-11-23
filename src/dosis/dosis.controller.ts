import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DosisService } from './dosis.service';
import { CreateDosiDto } from './dto/create-dosi.dto';
import { UpdateDosiDto } from './dto/update-dosi.dto';

@Controller('dosis')
export class DosisController {
  constructor(private readonly dosisService: DosisService) {}

  @Post()
  create(@Body() createDosiDto: CreateDosiDto) {
    return this.dosisService.create(createDosiDto);
  }

  @Get()
  findAll() {
    return this.dosisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dosisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDosiDto: UpdateDosiDto) {
    return this.dosisService.update(+id, updateDosiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dosisService.remove(+id);
  }
}
