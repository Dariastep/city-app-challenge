import {
  Injectable,
  InternalServerErrorException,
  Logger } from '@nestjs/common';
import { cities } from '../../assets/data/cities.json';
import {
  City,
  mapCityRawToCity,
} from '../../../../../lib/shared/src/index';
import { GetCitiesFilterDto } from './dto/get-cities-filter.dto';
import { isMatchingQuery } from './cities.utils';

@Injectable()
export class CitiesService {
  private readonly logger = new Logger(CitiesService.name);
  private readonly mappedCities: City[] = cities.map(mapCityRawToCity);

  async getCities(filterDto: GetCitiesFilterDto): Promise<City[]> {
    const query = filterDto?.search?.toLowerCase();

    try {
      if (!query) {
        return this.mappedCities;
      }

      return this.mappedCities.filter(((city:City ) => isMatchingQuery(city, query )));
    } catch (error) {
      this.logger.error(`Failed to get the cities with the query: "${query}"`, error);

      throw new InternalServerErrorException();
    }
  }



}
