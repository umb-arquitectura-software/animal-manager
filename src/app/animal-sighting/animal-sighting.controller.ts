import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimalSightingService } from './animal-sighting.service';
import { CreateAnimalSightingDto } from './dto/create-animal-sighting.dto';
import { UpdateAnimalSightingDto } from './dto/update-animal-sighting.dto';

@Controller('animal-sighting')
export class AnimalSightingController {
  constructor(private readonly animalSightingService: AnimalSightingService) {}

  @Post()
  create(@Body() createAnimalSightingDto: CreateAnimalSightingDto) {
    return this.animalSightingService.create(createAnimalSightingDto);
  }

  @Get()
  findAll() {
    return this.animalSightingService.findAll();
  }

  @Get('byUser/:userId')
  findAllByUser(@Param('userId') userId: string) {
    return this.animalSightingService.findAllByUser(userId);
  }

  @Get('byAnimal/:animalId')
  findAllByAnimal(@Param('animalId') animalId: string) {
    return this.animalSightingService.findAllByAnimal(animalId);
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.animalSightingService.findOne(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateAnimalSightingDto: UpdateAnimalSightingDto) {
    return this.animalSightingService.update(_id, updateAnimalSightingDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.animalSightingService.remove(_id);
  }
}
