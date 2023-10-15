import { inject, injectable } from 'tsyringe';

// import IOrdersRepository from '../repositories/IOrdersRepository';
import { Delivery } from '../entities/Delivery';

interface IRequest {
  name: string;
  deliveryDate: Date;
  initialLatitude: number;
  initialLongitude: number;
  finalLatitude: number;
  finalLongitude: number;
}

@injectable()
class CreateDeliveryService {
  constructor() {} // private ordersRepository: IOrdersRepository, // @inject('OrdersRepository')

  public async execute(input: IRequest): Promise<Delivery | undefined> {
    console.log('input ', input);
    return input as unknown as Delivery;
  }
}

export default CreateDeliveryService;
