import ICreateDeliveryDTO from '../../dtos/ICreateDeliveryDTO';
import IListDeliveryDTO from '../../dtos/IListDeliveryDTO';
import { Delivery } from '../../entities/Delivery';

export default interface IDeliveryRepository {
  create(data: ICreateDeliveryDTO): Promise<Delivery>;
  list(data: IListDeliveryDTO): Promise<{ list: Delivery[]; count: number }>;
  findById(id: number): Promise<Delivery | null>;
  delete(id: number): Promise<void>;
}
