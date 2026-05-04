import { Controller, Get, Param, Query } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from '@lib/models';
import { GetCitiesFilterDto } from './dto/get-cities-filter.dto';

@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Get()
  async getAllCities(
    @Query() getCitiesFilterDto: GetCitiesFilterDto,
  ): Promise<City[]> {
    return await this.citiesService.getCities(getCitiesFilterDto);
  }

  @Get(':id')
  async getCityById(@Param('id') id: string): Promise<City> {
    return await this.citiesService.getCityById(id);
  }
}
