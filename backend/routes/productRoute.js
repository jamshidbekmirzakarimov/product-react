import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getSingleProduct } from '../controllers/productController.js';

const router = express.Router();

// Define your product routes here
router.get('/', getAllProducts);
router.post('/', addProduct);
router.get('/:id', getSingleProduct);
router.delete('/:id', deleteProduct);

export default router;
