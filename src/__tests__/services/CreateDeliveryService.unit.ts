import 'reflect-metadata';
import CreateDeliveryService from '../../services/CreateDeliveryService';
import FakeDeliveryRepository from '../fakes/FakeDeliveryRepository';
import AppError from '../../helpers/AppError';

let fakeDeliveryRepository: FakeDeliveryRepository;
let createDeliveryService: CreateDeliveryService;

const inputMock = {
  name: 'Jonh Doe',
  deliveryDate: new Date(),
  finalLatitude: 1.22,
  finalLongitude: 1.33,
  initialLatitude: 1.22,
  initialLongitude: 1.9,
};

describe('CreateDeliveryService', () => {
  beforeEach(() => {
    fakeDeliveryRepository = new FakeDeliveryRepository();
    createDeliveryService = new CreateDeliveryService(fakeDeliveryRepository);
  });

  it('should be able to create a new delivery', async () => {
    const response = await createDeliveryService.execute(inputMock);

    expect(response).toHaveProperty('id');
  });

  it('should be able to return error when the delivery date was earlier than today', async () => {
    const testDate = new Date('2023-01-01T01:01:01.000Z');

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      const customDate = new Date(testDate);

      return customDate.setHours(customDate.getHours() - 1);
    });

    await expect(
      createDeliveryService.execute({ ...inputMock, deliveryDate: testDate }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
