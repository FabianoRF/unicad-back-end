import { inject, injectable } from 'tsyringe';

import { Delivery } from '../entities/Delivery';
import IDeliveryRepository from '../repositories/models/IDeliveryRepository';

interface IRequest {
  limit: number;
  offset: number;
}

interface IResponse {
  list: Delivery[];
  count: number;
}

@injectable()
class ListDeliveryService {
  constructor(
    @inject('DeliveryRepository')
    private deliveryRepository: IDeliveryRepository,
  ) {}

  public async execute(input: IRequest): Promise<IResponse> {
    const deliveries = await this.deliveryRepository.list(input);
    console.log(
      'ListDeliveryService :: deliveries :: ',
      JSON.stringify(deliveries),
    );

    return deliveries;
  }
}

export default ListDeliveryService;
