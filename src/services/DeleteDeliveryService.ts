import { inject, injectable } from 'tsyringe';

import IDeliveryRepository from '../repositories/models/IDeliveryRepository';

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
    const deliveries = await this.deliveryRepository.delete(input.id);
    console.log(
      'DeleteDeliveryService :: deliveries :: ',
      JSON.stringify(deliveries),
    );
  }
}

export default DeleteDeliveryService;
