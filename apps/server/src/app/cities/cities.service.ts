import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { cities } from '../../assets/data/cities.json';
import { City } from '@lib/models';
import { GetCitiesFilterDto } from './dto/get-cities-filter.dto';
import { isMatchingQuery } from './cities.utils';

@Injectable()
export class CitiesService {
  private readonly logger = new Logger(CitiesService.name);
  private readonly mappedCities: City[] = cities.map(mapCityRawToCity);

  async getCities(filterDto: GetCitiesFilterDto): Promise<City[]> {
    const query = filterDto?.search?.toLowerCase() ?? '';

    try {
      if (!query) {
        return this.mappedCities;
      }

      return this.mappedCities.filter((city: City) =>
        isMatchingQuery(city, query),
      );
    } catch (error) {
      this.logger.error(
        `Failed to get the cities with the query: "${query}"`,
        error,
      );

      throw new InternalServerErrorException();
    }
  }

  async getCityById(id: string): Promise<City> {
    const found = await this.mappedCities.find((city) => city.id === id);

    if (!found) {
      throw new NotFoundException(`City with the id "${id}" not found`);
    }

    return found;
  }
}
