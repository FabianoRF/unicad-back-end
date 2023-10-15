import { container } from 'tsyringe';
import DeliveryRepository from '../repositories/DeliveryRepository';
import IDeliveryRepository from '../repositories/models/IDeliveryRepository';

container.registerSingleton<IDeliveryRepository>(
  'DeliveryRepository',
  DeliveryRepository,
);
