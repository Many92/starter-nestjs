import { Module } from '@nestjs/common';
import { RecomendacionesService } from './recomendaciones.service';
import { RecomendacionesController } from './recomendaciones.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [RecomendacionesController],
  providers: [RecomendacionesService, PrismaService],
  exports: [RecomendacionesService],
})
export class RecomendacionesModule {}
