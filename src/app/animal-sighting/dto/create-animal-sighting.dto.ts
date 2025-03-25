import { IsString } from "class-validator";

export class CreateAnimalSightingDto {

  user: {
    userId: string;
    username: string;
  }

  animal: {
    animalId: string;
    name: string;
    species: string;
  }

  coordinates: number[];

  @IsString()
  img: string;
}
