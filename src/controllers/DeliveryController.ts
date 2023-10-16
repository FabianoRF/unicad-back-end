import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateDeliveryService from '../services/CreateDeliveryService';
import ListDeliveryService from '../services/ListDeliveryService';
import DeleteDeliveryService from '../services/DeleteDeliveryService';

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

    const result = await createDelivery.execute({
      name,
      deliveryDate,
      initialLatitude,
      initialLongitude,
      finalLatitude,
      finalLongitude,
    });

    return response.json(result);
  }

  public async index(request: Request, response: Response) {
    const { limit, offset } = request.query;

    const createDelivery = container.resolve(ListDeliveryService);

    const list = await createDelivery.execute({
      limit: limit ? Number(limit) : 10,
      offset: offset ? Number(offset) : 0,
    });

    return response.json(list);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteDelivery = container.resolve(DeleteDeliveryService);

    await deleteDelivery.execute({ id: Number(id) });

    return response.status(204).end();
  }
}
