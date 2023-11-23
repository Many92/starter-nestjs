import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { handleDBErrors } from '../helpers/errorsDb';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    try {
      createUserDto.password = bcrypt.hashSync(createUserDto.password, 10);
      createUserDto.email.toLowerCase().trim();
      return await this.prisma.users.create({
        data: createUserDto,
      });
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findAll() {
    try {
      const getAlUsers = await this.prisma.users.findMany();
      if (getAlUsers.length <= 0) {
        throw new NotFoundException(`No se encuentran los registros`);
      }
      return getAlUsers;
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findOne(id: string) {
    const founded = await this.prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    if (!founded) {
      throw new NotFoundException(`El usuario que busca no existe`);
    }
    return founded;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const founded = await this.findOne(id);
      updateUserDto.password
        ? (updateUserDto.password = bcrypt.hashSync(updateUserDto.password, 10))
        : updateUserDto.password;

      const upd = await this.prisma.users.update({
        where: {
          id: founded.id,
        },
        data: updateUserDto,
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
      return await this.prisma.users.delete({
        where: {
          id: founded.id,
        },
      });
    } catch (error: any) {
      handleDBErrors(error);
    }
  }
  async findUsername(username: string) {
    try {
      const founded = await this.prisma.users.findFirst({
        where: {
          username: username,
        },
      });
      return founded;
    } catch (error) {
      handleDBErrors(error);
    }
  }
}
