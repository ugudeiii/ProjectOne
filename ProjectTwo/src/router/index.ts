import { Router } from 'express';
import UserRoutes from './user.routes';
import ProductRoutes from './product.routes';
const router = Router();

router.use('/userget', UserRoutes);
router.use('/productget', ProductRoutes);

export default router;