import { Router } from 'express';
import { body } from 'express-validator';
import { handleInputErrors } from './modules/middleware';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from './handlers/product';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';

const router = Router();

router.get('/product', getProducts);
router.get('/product/:id', getProduct);
router.put('/product/:id', body('name').isString(), handleInputErrors, updateProduct);
router.post('/product', body('name').isString(), handleInputErrors, createProduct);
router.delete('/product/:id', deleteProduct);

router.get('/update', getUpdates);
router.get('/update/:id', getOneUpdate);
router.put(
  '/update/:id',
  body('title').optional(),
  body('body').optional(),
  body('status').optional(),
  body('version').optional(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  updateUpdate
);
router.post('/update', body('title').exists().isString(), body('body').exists().isString(), body('productId').exists().isString(), createUpdate);
router.delete('/update/:id', deleteUpdate);

router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.put('/updatepoint/:id', body('name').optional().isString(), body('description').optional().isString(), () => {});
router.post('/updatepoint', body('name').isString(), body('description').isString(), body('updateId').exists().isString(), () => {});
router.delete('/updatepoint/:id', () => {});

router.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: `had an error: ${err.message}` });
});

export default router;
