import { Controller, Get } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from '../../../../../lib/shared/src/index';


@Controller('cities')
export class CitiesController {
  constructor( private citiesService: CitiesService ) {}

@Get()
    getAllCities(): City[] {
      return this.citiesService.getCities();
    }

}
