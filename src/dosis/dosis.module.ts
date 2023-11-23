import { Module } from '@nestjs/common';
import { DosisService } from './dosis.service';
import { DosisController } from './dosis.controller';

@Module({
  controllers: [DosisController],
  providers: [DosisService]
})
export class DosisModule {}
