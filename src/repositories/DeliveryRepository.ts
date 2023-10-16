import IDeliveryRepository from './models/IDeliveryRepository';
import { Delivery } from '../entities/Delivery';
import ICreateDeliveryDTO from '../dtos/ICreateDeliveryDTO';
import { AppDataSource } from '../database';
import IListDeliveryDTO from '../dtos/IListDeliveryDTO';

class DeliveryRepository implements IDeliveryRepository {
  private ormRepository = AppDataSource.getRepository(Delivery);

  constructor() {}

  public async create(input: ICreateDeliveryDTO): Promise<Delivery> {
    const delivery = this.ormRepository.create(input);

    await this.ormRepository.save(delivery);

    return delivery;
  }

  public async list(
    input: IListDeliveryDTO,
  ): Promise<{ list: Delivery[]; count: number }> {
    const [list, count] = await this.ormRepository
      .createQueryBuilder()
      .offset(input.offset)
      .limit(input.limit)
      .getManyAndCount();

    return { list, count };
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findById(id: number): Promise<Delivery | null> {
    return this.ormRepository.findOne({
      where: {
        id,
      },
    });
  }
}

export default DeliveryRepository;
