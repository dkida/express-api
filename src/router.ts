import { Router } from 'express';
import { body } from 'express-validator';
import { handleInputErrors } from './modules/middleware';

const router = Router();

router.get('/product', (req, res) => {
  res.json({ message: 'Hello' });
});
router.get('/product/:id', () => {});
router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {});
router.post('/product', body('name').isString(), handleInputErrors, (req, res) => {});
router.delete('/product/:id', () => {});

router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put(
  '/update/:id',
  body('title').optional(),
  body('body').optional(),
  body('status').optional(),
  body('version').optional(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  () => {}
);
router.post('/update', body('title').exists().isString(), body('body').exists().isString(), () => {});
router.delete('/update/:id', () => {});

router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.put('/updatepoint/:id', body('name').optional().isString(), body('description').optional().isString(), () => {});
router.post('/updatepoint', body('name').isString(), body('description').isString(), body('updateId').exists().isString(), () => {});
router.delete('/updatepoint/:id', () => {});

export default router;
