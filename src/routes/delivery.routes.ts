import { Router } from 'express';

import DeliveryController from '../controllers/DeliveryController';

const deliveryRouter = Router();
const deliveryController = new DeliveryController();

deliveryRouter.post('/', deliveryController.create);
deliveryRouter.get('/', deliveryController.index);
deliveryRouter.get('/:id', deliveryController.show);
deliveryRouter.delete('/:id', deliveryController.delete);

export default deliveryRouter;
