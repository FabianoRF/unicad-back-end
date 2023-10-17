import 'reflect-metadata';
import FakeDeliveryRepository from '../fakes/FakeDeliveryRepository';
import GetDeliveryByIdService from '../../services/GetDeliveryByIdService';

let fakeDeliveryRepository: FakeDeliveryRepository;
let getDeliveryByIdService: GetDeliveryByIdService;

describe('GetDeliveryByIdService', () => {
  beforeEach(() => {
    fakeDeliveryRepository = new FakeDeliveryRepository();
    getDeliveryByIdService = new GetDeliveryByIdService(fakeDeliveryRepository);
  });

  it('should be able get delivery by id', async () => {
    const entity = await fakeDeliveryRepository.create({
      name: 'Jonh Doe',
      deliveryDate: new Date(),
      finalLatitude: 1.22,
      finalLongitude: 1.33,
      initialLatitude: 1.22,
      initialLongitude: 1.9,
    });

    const response = await getDeliveryByIdService.execute(entity.id);

    expect(response).toEqual(entity);
  });
});
