import { Module } from '@nestjs/common';
import { AnimalSightingService } from './animal-sighting.service';
import { AnimalSightingController } from './animal-sighting.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalSighting, AnimalSightingSchema } from 'src/schemas/animalSighting.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: AnimalSighting.name, schema: AnimalSightingSchema }])],
  controllers: [AnimalSightingController],
  providers: [AnimalSightingService],
  exports: [AnimalSightingService],
})
export class AnimalSightingModule {}
