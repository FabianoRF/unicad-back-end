import { Delivery } from '../../entities/Delivery';
import IDeliveryRepository from '../../repositories/models/IDeliveryRepository';
import ICreateDeliveryDTO from '../../dtos/ICreateDeliveryDTO';
import IListDeliveryDTO from '../../dtos/IListDeliveryDTO';

class FakeDeliveryRepository implements IDeliveryRepository {
  private deliveries: Delivery[] = [];

  public async findById(id: number): Promise<Delivery | null> {
    const findUser = this.deliveries.find(delivery => delivery.id === id);

    return findUser ?? null;
  }

  public async create(delivery: ICreateDeliveryDTO): Promise<Delivery> {
    const user = new Delivery();

    Object.assign(user, { id: this.deliveries.length + 1 }, delivery);

    this.deliveries.push(user);

    return user;
  }

  public async list(
    data: IListDeliveryDTO,
  ): Promise<{ list: Delivery[]; count: number }> {
    return {
      list: this.deliveries,
      count: this.deliveries.length,
    };
  }

  public async delete(id: number): Promise<void> {
    const index = this.deliveries.findIndex(item => item.id === id);

    this.deliveries.splice(index, 1);
  }
}

export default FakeDeliveryRepository;
