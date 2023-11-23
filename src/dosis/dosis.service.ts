import { Injectable } from '@nestjs/common';
import { CreateDosiDto } from './dto/create-dosi.dto';
import { UpdateDosiDto } from './dto/update-dosi.dto';

@Injectable()
export class DosisService {
  create(createDosiDto: CreateDosiDto) {
    return 'This action adds a new dosi';
  }

  findAll() {
    return `This action returns all dosis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dosi`;
  }

  update(id: number, updateDosiDto: UpdateDosiDto) {
    return `This action updates a #${id} dosi`;
  }

  remove(id: number) {
    return `This action removes a #${id} dosi`;
  }
}
