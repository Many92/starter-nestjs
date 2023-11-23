import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUnidadProductivaDto } from './dto/create-unidad_productiva.dto';
import { UpdateUnidadProductivaDto } from './dto/update-unidad_productiva.dto';
import { PrismaService } from '../prisma/prisma.service';
import { handleDBErrors } from '../helpers/errorsDb';

@Injectable()
export class UnidadProductivaService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUnidadProductivaDto: CreateUnidadProductivaDto) {
    try {
      return await this.prisma.unidad_productiva.create({
        data: createUnidadProductivaDto,
      });
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findAll() {
    try {
      const getAlUsers = await this.prisma.unidad_productiva.findMany();
      if (getAlUsers.length <= 0) {
        throw new NotFoundException(`No se encuentran los registros`);
      }
      return getAlUsers;
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findOne(id: string) {
    const founded = await this.prisma.unidad_productiva.findUnique({
      where: {
        id: id,
      },
    });
    if (!founded) {
      throw new NotFoundException(`El registro que busca no existe`);
    }
    return founded;
  }

  async update(
    id: string,
    updateUnidadProductivaDto: UpdateUnidadProductivaDto,
  ) {
    try {
      const founded = await this.findOne(id);
      const upd = await this.prisma.unidad_productiva.update({
        where: {
          id: founded.id,
        },
        data: updateUnidadProductivaDto,
      });
      if (!upd.id) {
        throw new NotFoundException(`Error al actualizar`);
      }
      return upd;
    } catch (error: any) {
      handleDBErrors(error);
    }
  }

  async remove(id: string) {
    try {
      const founded = await this.findOne(id);
      return await this.prisma.unidad_productiva.delete({
        where: {
          id: founded.id,
        },
      });
    } catch (error: any) {
      handleDBErrors(error);
    }
  }
}
