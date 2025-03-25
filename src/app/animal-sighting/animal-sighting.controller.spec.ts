import { Test, TestingModule } from '@nestjs/testing';
import { AnimalSightingController } from './animal-sighting.controller';
import { AnimalSightingService } from './animal-sighting.service';

describe('AnimalSightingController', () => {
  let controller: AnimalSightingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalSightingController],
      providers: [AnimalSightingService],
    }).compile();

    controller = module.get<AnimalSightingController>(AnimalSightingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
