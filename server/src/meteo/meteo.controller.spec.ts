import { Test, TestingModule } from '@nestjs/testing';
import { MeteoController } from './meteo.controller';
import { MeteoService } from './meteo.service';

describe('MeteoController', () => {
  let controller: MeteoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeteoController],
      providers: [MeteoService],
    }).compile();

    controller = module.get<MeteoController>(MeteoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
