import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMuestrasAnalizadaDto } from './dto/create-muestras_analizada.dto';
import { UpdateMuestrasAnalizadaDto } from './dto/update-muestras_analizada.dto';
import { handleDBErrors } from '../helpers/errorsDb';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MuestrasAnalizadasService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMuestrasAnalizadaDto: CreateMuestrasAnalizadaDto) {
    try {
      return await this.prisma.muestras_Analizadas.create({
        data: createMuestrasAnalizadaDto,
      });
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findAll() {
    try {
      const getAlUsers = await this.prisma.muestras_Analizadas.findMany();
      if (getAlUsers.length <= 0) {
        throw new NotFoundException(`No se encuentran los registros`);
      }
      return getAlUsers;
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findOne(id: string) {
    const founded = await this.prisma.muestras_Analizadas.findUnique({
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
    updateMuestrasAnalizadaDto: UpdateMuestrasAnalizadaDto,
  ) {
    try {
      const founded = await this.findOne(id);
      const upd = await this.prisma.muestras_Analizadas.update({
        where: {
          id: founded.id,
        },
        data: updateMuestrasAnalizadaDto,
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
      return await this.prisma.muestras_Analizadas.delete({
        where: {
          id: founded.id,
        },
      });
    } catch (error: any) {
      handleDBErrors(error);
    }
  }
}
