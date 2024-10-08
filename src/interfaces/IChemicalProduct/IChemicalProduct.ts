import { ObjectId } from 'mongoose'

export interface IChemicalProduct extends Document {
  _id: ObjectId | string; 
  name: string;
  createdAt: Date | string;
  state: string, //TODO: Ojo con los enums
}