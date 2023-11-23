import { Test, TestingModule } from '@nestjs/testing';
import { DosisController } from './dosis.controller';
import { DosisService } from './dosis.service';

describe('DosisController', () => {
  let controller: DosisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DosisController],
      providers: [DosisService],
    }).compile();

    controller = module.get<DosisController>(DosisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
