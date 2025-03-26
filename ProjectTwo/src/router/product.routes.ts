import { Router } from "express";
import { getProductListController, addProductController } from "../contoller/product.controller";
const router = Router();
router.get('/products', getProductListController);
router.post('/products', addProductController);
export default router;