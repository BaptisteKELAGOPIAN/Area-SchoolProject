import { Test, TestingModule } from '@nestjs/testing';
import { RiotController } from './riot.controller';
import { RiotService } from './riot.service';

describe('RiotController', () => {
  let controller: RiotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiotController],
      providers: [RiotService],
    }).compile();

    controller = module.get<RiotController>(RiotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});