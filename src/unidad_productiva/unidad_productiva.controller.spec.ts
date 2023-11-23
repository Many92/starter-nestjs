import { Test, TestingModule } from '@nestjs/testing';
import { UnidadProductivaController } from './unidad_productiva.controller';
import { UnidadProductivaService } from './unidad_productiva.service';

describe('UnidadProductivaController', () => {
  let controller: UnidadProductivaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnidadProductivaController],
      providers: [UnidadProductivaService],
    }).compile();

    controller = module.get<UnidadProductivaController>(UnidadProductivaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
