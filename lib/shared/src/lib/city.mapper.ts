import { CityRaw } from './city-raw.model';
import { City } from './city.model';

/**
 * Transforms the data from the JSON file into a formatted city object
 * @param data the raw data from the JSON file
 * @returns a formatted city object
 */
export function mapCityRawToCity(data: CityRaw): City {
return {
  name: data.name,
  nameNative: data.name_native,
  country: data.country,
  continent: data.continent,
  latitude: Number(data.latitude),
  longitude: Number(data.longitude),
  population: Number(data.population),
  founded: Number(data.founded),
  landmarks: data.landmarks,
}
}
