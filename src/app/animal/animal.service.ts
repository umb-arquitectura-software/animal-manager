import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from 'src/schemas/animal.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AnimalService {

  constructor (
    @InjectModel(Animal.name) private AnimalSchema: Model<Animal>
  ) {}

  async create(createAnimalDto: CreateAnimalDto) {
    const animal = new this.AnimalSchema(createAnimalDto);
    return animal.save();
  }

  async findAll() {
    const animal = await this.AnimalSchema.find();
    return animal;
  }

  async findOne(id: string) {
    const animal = await this.AnimalSchema.findById(id);
    return animal;
  }

  async update(id: string, updateAnimalDto: UpdateAnimalDto) {
    if (!this.AnimalSchema.exists({ _id: id })) throw new Error('Animal not found');
    const animal = await this.AnimalSchema.findByIdAndUpdate(id, updateAnimalDto, { new: true });
    return animal;
  }

  async remove(id: string) {
    if (!this.AnimalSchema.exists({ _id: id })) throw new Error('Animal not found');
    await this.AnimalSchema.findByIdAndDelete(id);
    return `This action removes a #${id} animal`;
  }
}
