import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecomendacioneDto } from './dto/create-recomendacione.dto';
import { UpdateRecomendacioneDto } from './dto/update-recomendacione.dto';
import { PrismaService } from '../prisma/prisma.service';
import { handleDBErrors } from '../helpers/errorsDb';

@Injectable()
export class RecomendacionesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createRecomendacioneDto: CreateRecomendacioneDto) {
    try {
      console.log(
        `output->createRecomendacioneDtoService`,
        createRecomendacioneDto,
      );
      return await this.prisma.recomnedaciones.create({
        data: createRecomendacioneDto,
      });
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findAll() {
    try {
      const getAllRoles = await this.prisma.recomnedaciones.findMany();
      if (getAllRoles.length <= 0) {
        throw new NotFoundException(`No se encuentran los registros`);
      }
      return getAllRoles;
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findOne(id: string) {
    try {
      const founded = await this.prisma.recomnedaciones.findUnique({
        where: {
          id: id,
        },
      });

      if (!founded) {
        throw new NotFoundException(`El registro que busca no existe`);
      }
      return founded;
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async update(id: string, updateRecomendacioneDto: UpdateRecomendacioneDto) {
    try {
      const founded = await this.findOne(id);

      const upd = await this.prisma.recomnedaciones.update({
        where: {
          id: founded.id,
        },
        data: updateRecomendacioneDto,
      });

      if (!upd.id) {
        throw new NotFoundException(`Error al actualizar`);
      }
      return upd;
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async remove(id: string) {
    try {
      const founded = await this.findOne(id);

      return await this.prisma.recomnedaciones.delete({
        where: {
          id: founded.id,
        },
      });
    } catch (error) {
      handleDBErrors(error);
    }
  }
}
