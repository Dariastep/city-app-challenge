import { Controller, Get, Query } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from '../../../../../lib/shared/src/index';
import { GetCitiesFilterDto } from './dto/get-cities-filter.dto';


@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Get()
  getAllCities(@Query() getCitiesFilterDto: GetCitiesFilterDto): City[] {
    return this.citiesService.getCities(getCitiesFilterDto);
  }
}
