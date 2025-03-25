import { Test, TestingModule } from '@nestjs/testing';
import { AnimalSightingService } from './animal-sighting.service';

describe('AnimalSightingService', () => {
  let service: AnimalSightingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimalSightingService],
    }).compile();

    service = module.get<AnimalSightingService>(AnimalSightingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
