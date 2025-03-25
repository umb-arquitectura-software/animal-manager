import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalSightingDto } from './create-animal-sighting.dto';

export class UpdateAnimalSightingDto extends PartialType(CreateAnimalSightingDto) {
  _id: string;
}
