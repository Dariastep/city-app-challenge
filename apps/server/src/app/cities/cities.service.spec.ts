import { Test, TestingModule } from '@nestjs/testing';
import { CitiesService } from './cities.service';

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitiesService],
    }).compile();

    service = module.get<CitiesService>(CitiesService);
  });

  it('should return all cities if no search applied', async () => {
    const result = await service.getCities({});
    expect(result.length).toBe(8);
  });

  it('should return the cities by filtering by the city name', async () => {
    const result = await service.getCities({ search: 'MUN' });
    expect(result[0].name).toBe('Munich');
  });

  it('should return the city by its landmark', async () => {
    const result = await service.getCities({ search: 'Sydney Opera House' });
    expect(result[0].name).toBe('Sydney');
  });

  it('should return no results if the search parameter does not match', async () => {
    const result = await service.getCities({ search: 'Zugspitze' });
    expect(result).toEqual([]);
  });
});
