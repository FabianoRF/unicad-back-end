import 'reflect-metadata';
import FakeDeliveryRepository from '../fakes/FakeDeliveryRepository';
import DeleteDeliveryService from '../../services/DeleteDeliveryService';
import AppError from '../../helpers/AppError';

let fakeDeliveryRepository: FakeDeliveryRepository;
let deleteDeliveryService: DeleteDeliveryService;

const inputMock = { limit: 10, offset: 0 };

describe('DeleteDeliveryService.unit', () => {
  beforeEach(() => {
    fakeDeliveryRepository = new FakeDeliveryRepository();
    deleteDeliveryService = new DeleteDeliveryService(fakeDeliveryRepository);
  });

  it('should be able to delete delivery by id', async () => {
    await fakeDeliveryRepository.create({
      name: 'Jonh Doe',
      deliveryDate: new Date(),
      finalLatitude: 1.22,
      finalLongitude: 1.33,
      initialLatitude: 1.22,
      initialLongitude: 1.9,
    });

    await deleteDeliveryService.execute({ id: 1 });

    const result = await fakeDeliveryRepository.findById(1);

    expect(result).toBeNull();
  });

  it('should be able return error when does not exists delivery id', async () => {
    await expect(
      deleteDeliveryService.execute({ id: 1 }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
