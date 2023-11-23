import { Test, TestingModule } from '@nestjs/testing';
import { DosisService } from './dosis.service';

describe('DosisService', () => {
  let service: DosisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DosisService],
    }).compile();

    service = module.get<DosisService>(DosisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
