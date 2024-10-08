import mongoose, { Document,Schema } from "mongoose";


import { IChemicalProduct } from "../interfaces/IChemicalProduct/IChemicalProduct";
import { validState } from "../enums/enumGlobal";
import { validChemicalProductNames } from "../enums/enumsChemicalProduct";

const ChemicalProductSchema = new Schema({
  name: { type: String,enum:validChemicalProductNames},
  createdAt:{type:Date,default: Date.now, inmutable: true}, // Fecha inicial no cambia
  state: { type: String,default: 'active',enum:validState},
},{versionKey: false})

const ChemicalProduct = mongoose.model<IChemicalProduct>('ChemicalProduct',ChemicalProductSchema)

export default ChemicalProduct