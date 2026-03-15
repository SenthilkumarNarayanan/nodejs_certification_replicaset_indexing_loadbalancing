import express from 'express';
import { getProduct } from '../controllers/productController.js';
const router = express.Router();

router.get("/product/:id", getProduct);

 export default router;