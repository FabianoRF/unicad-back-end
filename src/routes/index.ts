import { Router } from 'express';
import deliveryRouter from './delivery.routes';

const router = Router();

router.use('/delivery', deliveryRouter);

export default router;
