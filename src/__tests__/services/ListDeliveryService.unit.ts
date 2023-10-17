import 'reflect-metadata';
import CreateDeliveryService from '../../services/CreateDeliveryService';
import FakeDeliveryRepository from '../fakes/FakeDeliveryRepository';
import AppError from '../../helpers/AppError';
import ListDeliveryService from '../../services/ListDeliveryService';

let fakeDeliveryRepository: FakeDeliveryRepository;
let listDeliveryService: ListDeliveryService;

const inputMock = { limit: 10, offset: 0 };

describe('ListDeliveryService', () => {
  beforeEach(() => {
    fakeDeliveryRepository = new FakeDeliveryRepository();
    listDeliveryService = new ListDeliveryService(fakeDeliveryRepository);
  });

  it('should be able to list deliveries', async () => {
    const entityOne = await fakeDeliveryRepository.create({
      name: 'Jonh Doe',
      deliveryDate: new Date(),
      finalLatitude: 1.22,
      finalLongitude: 1.33,
      initialLatitude: 1.22,
      initialLongitude: 1.9,
    });

    const entityTwo = await fakeDeliveryRepository.create({
      name: 'Jonh Doe 2',
      deliveryDate: new Date(),
      finalLatitude: 1.22,
      finalLongitude: 1.33,
      initialLatitude: 1.22,
      initialLongitude: 1.9,
    });

    const response = await listDeliveryService.execute(inputMock);

    expect(response.list).toEqual([entityOne, entityTwo]);
    expect(response.count).toEqual(2);
  });
});
