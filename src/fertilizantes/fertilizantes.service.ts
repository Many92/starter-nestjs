import { Injectable } from '@nestjs/common';
import { CreateFertilizanteDto } from './dto/create-fertilizante.dto';
import { UpdateFertilizanteDto } from './dto/update-fertilizante.dto';

@Injectable()
export class FertilizantesService {
  create(createFertilizanteDto: CreateFertilizanteDto) {
    return 'This action adds a new fertilizante';
  }

  findAll() {
    return `This action returns all fertilizantes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} fertilizante`;
  }

  update(id: string, updateFertilizanteDto: UpdateFertilizanteDto) {
    return `This action updates a #${id} fertilizante`;
  }

  remove(id: string) {
    return `This action removes a #${id} fertilizante`;
  }
}
