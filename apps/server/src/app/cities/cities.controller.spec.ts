import { Test, TestingModule } from '@nestjs/testing';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { City } from '@lib/shared';

const mockedCity: City = {
  name: 'Madrid',
  nameNative: 'Madrid',
  country: 'Spain',
  continent: 'Europe',
  latitude: 40.416775,
  longitude: -3.70379,
  population: 3223000,
  founded: 1083,
  landmarks: ['Royal Palace', 'Plaza Mayor', 'Plaza de Cibeles'],
};

describe('CitiesController', () => {
  let controller: CitiesController;
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitiesController],
      providers: [{
        provide: CitiesService,
        useValue: {
          getCities: jest.fn()
        }
      }]
    }).compile();

    controller = module.get<CitiesController>(CitiesController);
    service = module.get<CitiesService>(CitiesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call getCities and return the result', async () => {
    jest.spyOn(service, 'getCities').mockResolvedValue([mockedCity]);
    const result = await controller.getAllCities({search: 'Madrid'});
    expect(result).toEqual([mockedCity]);
  });
});
