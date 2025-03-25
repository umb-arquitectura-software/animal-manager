import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type AnimalSightingDocument = HydratedDocument<AnimalSighting>;

@Schema({ timestamps: true })
export class AnimalSighting {
  
  @Prop({ 
    type: { userId: String, username: String }, 
    required: true 
  })
  user: { userId: string; username: string };

  @Prop({ 
    type: { animalId: String, name: String, species: String }, 
    required: true 
  })
  animal: { animalId: string; name: string; species: string };

  @Prop({ type: [Number], required: true })
  coordinates: number[];

  @Prop({ type: String, required: false })
  img?: string;
}

export const AnimalSightingSchema = SchemaFactory.createForClass(AnimalSighting);
