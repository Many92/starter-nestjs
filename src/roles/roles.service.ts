import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from '../prisma/prisma.service';
import { handleDBErrors } from '../helpers/errorsDb';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createRoleDto: CreateRoleDto) {
    try {
      return await this.prisma.roles.create({
        data: createRoleDto,
      });
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findAll() {
    try {
      const getAllRoles = await this.prisma.roles.findMany();
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
      const founded = await this.prisma.roles.findUnique({
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

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    try {
      const founded = await this.findOne(id);

      const upd = await this.prisma.roles.update({
        where: {
          id: founded.id,
        },
        data: updateRoleDto,
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

      return await this.prisma.roles.delete({
        where: {
          id: founded.id,
        },
      });
    } catch (error) {
      handleDBErrors(error);
    }
  }
}
