import { Injectable } from '@nestjs/common';
import { cities } from '../../assets/data/cities.json';
import { CityRaw } from '@lib/shared';

@Injectable()
export class CitiesService {
  getCities(): CityRaw[] {
    return cities;
  }
 }
