import { Module } from '@nestjs/common';
import { UnidadProductivaService } from './unidad_productiva.service';
import { UnidadProductivaController } from './unidad_productiva.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [UnidadProductivaController],
  providers: [UnidadProductivaService, PrismaService],
  exports: [UnidadProductivaService],
})
export class UnidadProductivaModule {}
