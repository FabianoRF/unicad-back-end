import { Router } from 'express';

import DeliveryController from '../controllers/DeliveryController';

const deliveryRouter = Router();
const deliveryController = new DeliveryController();

deliveryRouter.post('/', deliveryController.create);

export default deliveryRouter;
