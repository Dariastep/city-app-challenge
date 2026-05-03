import { CityRaw } from './city-raw.model';
import { City } from './city.model';

/**
 * Transforms the data from the JSON file into a formatted city object
 * @param data the raw data from the JSON file
 * @returns a formatted city object
 */
export function mapCityRawToCity(data: CityRaw): City {
  return {
    name: data.name ?? 'unknown city',
    nameNative: data.name_native ?? data.name ?? 'unknown city',
    country: data.country ?? 'unknown country',
    continent: data.continent ?? 'unknown continent',
    latitude: Number(data.latitude) || 0,
    longitude: Number(data.longitude) || 0,
    population: parseInt(data.population?.toString() ?? '', 10) || 0,
    founded: parseInt(data.founded?.toString() ?? '', 10) || 0,
    landmarks: Array.isArray(data.landmarks) ? data.landmarks : [],
  };
}
