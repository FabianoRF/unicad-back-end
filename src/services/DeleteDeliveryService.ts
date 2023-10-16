import { inject, injectable } from 'tsyringe';

import IDeliveryRepository from '../repositories/models/IDeliveryRepository';
import AppError from '../helpers/AppError';

interface IRequest {
  id: number;
}

@injectable()
class DeleteDeliveryService {
  constructor(
    @inject('DeliveryRepository')
    private deliveryRepository: IDeliveryRepository,
  ) {}

  public async execute(input: IRequest): Promise<void> {
    const deliveryAlreadyExists = await this.deliveryRepository.findById(
      input.id,
    );

    if (!deliveryAlreadyExists) {
      throw new AppError('The Delivery id provided does not exist');
    }

    await this.deliveryRepository.delete(input.id);
    console.log('DeleteDeliveryService :: delivery deleted with success');
  }
}

export default DeleteDeliveryService;
