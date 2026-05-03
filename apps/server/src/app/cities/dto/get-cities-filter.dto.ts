import { IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetCitiesFilterDto {
  @IsOptional()
  @IsString()
  @Transform(({value}) => value?.trim())
  search?: string;
}

