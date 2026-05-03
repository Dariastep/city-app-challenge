import { Injectable } from '@nestjs/common';
import { cities } from '../../assets/data/cities.json';
import { City, CityRaw, mapCityRawToCity } from '../../../../../lib/shared/src/index';

@Injectable()
export class CitiesService {
  getCities(): City[] {
    return cities.map((city: CityRaw) => mapCityRawToCity(city));
  }
 }
