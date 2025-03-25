import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animalService.create(createAnimalDto);
  }

  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.animalService.findOne(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return this.animalService.update(_id, updateAnimalDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.animalService.remove(_id);
  }
}
