import { Delivery } from '../../entities/Delivery';
import IDeliveryRepository from '../../repositories/models/IDeliveryRepository';
import ICreateDeliveryDTO from '../../dtos/ICreateDeliveryDTO';

class FakeDeliveryRepository implements IDeliveryRepository {
  private deliveries: Delivery[] = [];

  public async findById(id: number): Promise<Delivery | undefined> {
    const findUser = this.deliveries.find(delivery => delivery.id === id);

    return findUser;
  }

  public async create(delivery: ICreateDeliveryDTO): Promise<Delivery> {
    const user = new Delivery();

    Object.assign(user, { id: this.deliveries.length + 1 }, delivery);

    this.deliveries.push(user);

    return user;
  }
}

export default FakeDeliveryRepository;
