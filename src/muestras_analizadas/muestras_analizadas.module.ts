import { Module } from '@nestjs/common';
import { MuestrasAnalizadasService } from './muestras_analizadas.service';
import { MuestrasAnalizadasController } from './muestras_analizadas.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MuestrasAnalizadasController],
  providers: [MuestrasAnalizadasService, PrismaService],
  exports: [MuestrasAnalizadasService],
})
export class MuestrasAnalizadasModule {}
