import { IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetCitiesFilterDto {
  @ApiPropertyOptional({
    description: 'Search by city name, country, continent or the city landmarks',
    example: 'Australia'
  })
  @IsOptional()
  @IsString()
  @Transform(({value}) => value?.trim())
  search?: string;
}

