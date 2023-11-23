import { Test, TestingModule } from '@nestjs/testing';
import { UnidadProductivaService } from './unidad_productiva.service';

describe('UnidadProductivaService', () => {
  let service: UnidadProductivaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnidadProductivaService],
    }).compile();

    service = module.get<UnidadProductivaService>(UnidadProductivaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
