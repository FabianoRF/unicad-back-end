import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateDeliveryService from '../services/CreateDeliveryService';
import ListDeliveryService from '../services/ListDeliveryService';
import DeleteDeliveryService from '../services/DeleteDeliveryService';
import GetDeliveryByIdService from '../services/GetDeliveryByIdService';

export default class DeliveryController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
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
    } catch (err) {
      next(err);
    }
  }

  public async index(request: Request, response: Response, next: NextFunction) {
    try {
      const { limit, offset } = request.query;

      const createDelivery = container.resolve(ListDeliveryService);

      const list = await createDelivery.execute({
        limit: limit ? Number(limit) : 10,
        offset: offset ? Number(offset) : 0,
      });

      return response.json(list);
    } catch (err) {
      next(err);
    }
  }

  public async show(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;

      const createDelivery = container.resolve(GetDeliveryByIdService);

      const delivery = await createDelivery.execute(+id);

      return response.json(delivery);
    } catch (err) {
      next(err);
    }
  }

  public async delete(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = request.params;

      const deleteDelivery = container.resolve(DeleteDeliveryService);

      await deleteDelivery.execute({ id: Number(id) });

      return response.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}
