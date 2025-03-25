import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from 'mongoose';

export type AnimalSightingDocument = HydratedDocument<AnimalSighting>;


@Schema({ timestamps: true })
export class AnimalSighting {

  @Prop({ required: true })
  user: {
    userId: string;
    username: string;
  }

  @Prop({ required: true })
  animal: {
    animalId: string;
    name: string;
    species: string;
  }

  @Prop({ required: true })
  coordinates: number[];
}

export const AnimalSightingSchema = SchemaFactory.createForClass(AnimalSighting);