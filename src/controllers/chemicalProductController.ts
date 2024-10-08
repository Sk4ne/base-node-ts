import { IChemicalProduct } from "../interfaces/IChemicalProduct/IChemicalProduct";
import { ChemicalProduct } from "../models";
import { Request,Response,NextFunction } from "express";


export const getChemicalProducts = async (req:Request, res:Response, next:NextFunction) => {
  try {
    /* Paginacion */
    const limit:number = Number(req.query.limit) || 10;
    const skip:number = Number(req.query.skip) || 0;

    /* </Paginacion */
    const chemicalProducts:IChemicalProduct[] = await ChemicalProduct.find({})
      .sort({createdAt: -1})
      .limit(limit)
      .skip(skip)
    // ContarDocumentos
    const totalChemicalProducts:number = await ChemicalProduct.find({}).countDocuments();
    res.status(200).json({
      totalChemicalProducts,
      chemicalProducts 
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      msg: error.message
    })
    next(err);
  }
}

export const addChemicalProduct = async (req: Request, res:Response, next:NextFunction) => {
  try {
    // IChemicalProduct es la interface que rige mi data
    const body: IChemicalProduct = req.body;
    let chemicalProduct = await ChemicalProduct.create(body)
    res.status(201).json(chemicalProduct)
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      msg: error.message
    })
    next(err);

  }
}