import { inject, injectable } from 'tsyringe';

// import IOrdersRepository from '../repositories/IOrdersRepository';
import { Delivery } from '../entities/Delivery';
import IDeliveryRepository from '../repositories/models/IDeliveryRepository';

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
    // o que faz sentido verificar?
    // data de entrega maior que hoje?

    const delivery = this.deliveryRepository.create(input);
    console.log(
      'CreateDeliveryService :: delivery :: ',
      JSON.stringify(delivery),
    );

    return delivery;
  }
}

export default CreateDeliveryService;
