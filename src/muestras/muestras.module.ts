import { Module } from '@nestjs/common';
import { MuestrasService } from './muestras.service';
import { MuestrasController } from './muestras.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MuestrasController],
  providers: [MuestrasService, PrismaService],
  exports: [MuestrasService],
})
export class MuestrasModule {}
