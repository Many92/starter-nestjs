import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMuestraDto } from './dto/create-muestra.dto';
import { UpdateMuestraDto } from './dto/update-muestra.dto';
import { handleDBErrors } from '../helpers/errorsDb';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MuestrasService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMuestraDto: CreateMuestraDto) {
    try {
      return await this.prisma.recepcion_muestras.create({
        data: createMuestraDto,
      });
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findAll() {
    try {
      const getAlUsers = await this.prisma.recepcion_muestras.findMany({
        include: {
          cultivo: true,
          unidad: true,
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
    const founded = await this.prisma.recepcion_muestras.findUnique({
      where: {
        id: id,
      },
    });
    if (!founded) {
      throw new NotFoundException(`El registro que busca no existe`);
    }
    return founded;
  }
  async findOneByCodigo(codigo: string) {
    const founded = await this.prisma.recepcion_muestras.findUnique({
      where: {
        codigo: codigo,
      },
    });
    if (!founded) {
      throw new NotFoundException(`El registro que busca no existe`);
    }
    return founded;
  }

  async update(id: string, updateMuestraDto: UpdateMuestraDto) {
    try {
      const founded = await this.findOne(id);
      const upd = await this.prisma.recepcion_muestras.update({
        where: {
          id: founded.id,
        },
        data: updateMuestraDto,
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
      return await this.prisma.recepcion_muestras.delete({
        where: {
          id: founded.id,
        },
      });
    } catch (error: any) {
      handleDBErrors(error);
    }
  }

  async findLast() {
    try {
      const getAlUsers = await this.prisma.recepcion_muestras.findMany();
      const order = [];
      getAlUsers.map((val) => {
        order.push(Number(val.codigo));
      });
      order.sort((a: any, b: any) => {
        return b - a;
      });
      if (getAlUsers.length <= 0) {
        throw new NotFoundException(`No se encuentran los registros`);
      }
      return order[0];
    } catch (error) {
      handleDBErrors(error);
    }
  }
}
