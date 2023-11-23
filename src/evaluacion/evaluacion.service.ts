import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { PrismaService } from '../prisma/prisma.service';
import { handleDBErrors } from '../helpers/errorsDb';

@Injectable()
export class EvaluacionService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createEvaluacionDto: CreateEvaluacionDto) {
    try {
      return await this.prisma.evaluacion.create({
        data: createEvaluacionDto,
      });
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findAll() {
    try {
      const getAlUsers = await this.prisma.evaluacion.findMany({
        include: {
          muestra: true,
        },
      });
      if (getAlUsers.length <= 0) {
        throw new NotFoundException(`No se encuentran los registros`);
      }
      return getAlUsers;
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findOne(id: string) {
    const founded = await this.prisma.evaluacion.findUnique({
      where: {
        id: id,
      },
    });
    if (!founded) {
      throw new NotFoundException(`El registro que busca no existe`);
    }
    return founded;
  }

  async update(id: string, updateEvaluacionDto: UpdateEvaluacionDto) {
    try {
      const founded = await this.findOne(id);
      const upd = await this.prisma.evaluacion.update({
        where: {
          id: founded.id,
        },
        data: updateEvaluacionDto,
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
      return await this.prisma.evaluacion.delete({
        where: {
          id: founded.id,
        },
      });
    } catch (error: any) {
      handleDBErrors(error);
    }
  }
}
