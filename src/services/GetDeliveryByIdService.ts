import { inject, injectable } from 'tsyringe';

import { Delivery } from '../entities/Delivery';
import IDeliveryRepository from '../repositories/models/IDeliveryRepository';

@injectable()
class GetDeliveryByIdService {
  constructor(
    @inject('DeliveryRepository')
    private deliveryRepository: IDeliveryRepository,
  ) {}

  public async execute(id: number): Promise<Delivery | null> {
    const delivery = await this.deliveryRepository.findById(id);
    console.log(
      'GetDeliveryByIdService :: delivery :: ',
      JSON.stringify(delivery),
    );

    return delivery;
  }
}

export default GetDeliveryByIdService;
