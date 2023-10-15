import IDeliveryRepository from './models/IDeliveryRepository';
import { Delivery } from '../entities/Delivery';
import ICreateDeliveryDTO from '../dtos/ICreateDeliveryDTO';
import { AppDataSource } from '../database';

class DeliveryRepository implements IDeliveryRepository {
  private ormRepository = AppDataSource.getRepository(Delivery);

  constructor() {}

  public async create(input: ICreateDeliveryDTO): Promise<Delivery> {
    const delivery = this.ormRepository.create(input);

    await this.ormRepository.save(delivery);

    return delivery;
  }
}

export default DeliveryRepository;
