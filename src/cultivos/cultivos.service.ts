import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCultivoDto } from './dto/create-cultivo.dto';
import { UpdateCultivoDto } from './dto/update-cultivo.dto';
import { PrismaService } from '../prisma/prisma.service';
import { handleDBErrors } from '../helpers/errorsDb';

@Injectable()
export class CultivosService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCultivoDto: CreateCultivoDto) {
    try {
      return await this.prisma.cultivos.create({
        data: createCultivoDto,
      });
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findAll() {
    try {
      const getAlUsers = await this.prisma.cultivos.findMany();
      if (getAlUsers.length <= 0) {
        throw new NotFoundException(`No se encuentran los registros`);
      }
      return getAlUsers;
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findOne(id: string) {
    const founded = await this.prisma.cultivos.findUnique({
      where: {
        id: id,
      },
    });
    if (!founded) {
      throw new NotFoundException(`El usuario que busca no existe`);
    }
    return founded;
  }

  async update(id: string, updateCultivoDto: UpdateCultivoDto) {
    try {
      const founded = await this.findOne(id);
      const upd = await this.prisma.cultivos.update({
        where: {
          id: founded.id,
        },
        data: updateCultivoDto,
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
      return await this.prisma.cultivos.delete({
        where: {
          id: founded.id,
        },
      });
    } catch (error: any) {
      handleDBErrors(error);
    }
  }
}
