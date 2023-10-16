import { inject, injectable } from 'tsyringe';

import { Delivery } from '../entities/Delivery';
import IDeliveryRepository from '../repositories/models/IDeliveryRepository';
import AppError from '../helpers/AppError';

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
  constructor(
    @inject('DeliveryRepository')
    private deliveryRepository: IDeliveryRepository,
  ) {}

  public async execute(input: IRequest): Promise<Delivery | undefined> {
    if (new Date(input.deliveryDate).getTime() > Date.now()) {
      throw new AppError('Delivery Date must be greater than now');
    }

    const delivery = this.deliveryRepository.create(input);
    console.log(
      'CreateDeliveryService :: delivery :: ',
      JSON.stringify(delivery),
    );

    return delivery;
  }
}

export default CreateDeliveryService;
