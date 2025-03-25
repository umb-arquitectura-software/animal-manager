import { Injectable } from '@nestjs/common';
import { CreateAnimalSightingDto } from './dto/create-animal-sighting.dto';
import { UpdateAnimalSightingDto } from './dto/update-animal-sighting.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AnimalSighting } from 'src/schemas/animalSighting.schema';
import { Model } from 'mongoose';

@Injectable()
export class AnimalSightingService {

  constructor(

    @InjectModel(AnimalSighting.name) private AnimalSchema: Model<AnimalSighting>
  ) { }

  async create(createAnimalSightingDto: CreateAnimalSightingDto) {
    const animalSighting = new this.AnimalSchema(createAnimalSightingDto);
    return animalSighting.save();
  }

  async findAll() {
    const animalSighting = await this.AnimalSchema.find();
    return animalSighting;
  }

  async findAllByUser(userId: string) {
    const animalSighting = await this.AnimalSchema.find({ "user.userId": userId });
    return animalSighting;
  }

  async findAllByAnimal(animalId: string) {
    const animalSighting = await this.AnimalSchema.find({ "animal.animalId": animalId });
    return animalSighting;
  }

  async findOne(id: string) {
    const animalSighting = await this.AnimalSchema.findById(id);
    return animalSighting;
  }

  async update(id: string, updateAnimalSightingDto: UpdateAnimalSightingDto) {
    if (!this.AnimalSchema.exists({ _id: id })) throw new Error('AnimalSighting not found');
    const animalSighting = await this.AnimalSchema.findByIdAndUpdate(id, updateAnimalSightingDto, { new: true });
    return animalSighting;
  }

  async remove(id: string) {
    if (!this.AnimalSchema.exists({ _id: id })) throw new Error('AnimalSighting not found');
    await this.AnimalSchema.findByIdAndDelete(id);
    return `This action removes a #${id} animalSighting`;
  }
}
