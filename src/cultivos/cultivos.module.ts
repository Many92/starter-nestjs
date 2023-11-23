import { Module } from '@nestjs/common';
import { CultivosService } from './cultivos.service';
import { CultivosController } from './cultivos.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CultivosController],
  providers: [CultivosService, PrismaService],
  exports: [CultivosService],
})
export class CultivosModule {}
