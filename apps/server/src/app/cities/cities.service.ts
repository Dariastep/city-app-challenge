import {
  Injectable,
  InternalServerErrorException,
  Logger,
  LoggerService,
} from '@nestjs/common';
import { cities } from '../../assets/data/cities.json';
import {
  City,
  CityRaw,
  mapCityRawToCity,
} from '../../../../../lib/shared/src/index';
import { GetCitiesFilterDto } from './dto/get-cities-filter.dto';

@Injectable()
export class CitiesService {
  private readonly logger = new Logger(CitiesService.name);

  getCities(filterDto: GetCitiesFilterDto): City[] {
    try {
      const mappedCity = cities.map((city: CityRaw) => mapCityRawToCity(city));

      if (!filterDto.search) {
        return mappedCity;
      }

      const query = filterDto.search?.trim().toLowerCase();

      const result = mappedCity.filter(
        (city) =>
          city.name.toLowerCase().includes(query) ||
          city.country.toLowerCase().includes(query) ||
          city.continent.toLowerCase().includes(query) ||
          city.landmarks.some((landmark) =>
            landmark.toLowerCase().includes(query),
          ),
      );

      return result;
    } catch (error) {
      this.logger.error('Failed to get the cities', error);

      throw new InternalServerErrorException();
    }
  }
}
