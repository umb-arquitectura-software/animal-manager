import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from 'mongoose';

export type AnimalDocument = HydratedDocument<Animal>;


@Schema({ timestamps: true })
export class Animal {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  species: string;

  @Prop({ required: true })
  description: string;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);