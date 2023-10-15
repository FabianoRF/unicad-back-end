import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateDeliveryService from '../services/CreateDeliveryService';

export default class DeliveryController {
  public async create(request: Request, response: Response) {
    const {
      name,
      deliveryDate,
      initialLatitude,
      initialLongitude,
      finalLatitude,
      finalLongitude,
    } = request.body;

    const createDelivery = container.resolve(CreateDeliveryService);

    return response.json(createDelivery);
  }
}
