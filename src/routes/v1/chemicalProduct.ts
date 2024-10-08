import { Router } from 'express';
import { addChemicalProduct, getChemicalProducts } from '../../controllers/chemicalProductController';

const router:Router = Router();

//TODO: Ojo falta 
/**
 * TODO: Configurar
 * validateJwt
 * validateRole
 */
router.get('/chemical-products',getChemicalProducts);
router.post('/chemical-product',addChemicalProduct);

export default router;