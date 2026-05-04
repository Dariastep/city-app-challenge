import { City } from '@lib/models';

/**
 *
 * @param city the mapped city object
 * @param query the search query
 * @returns boolean indicating if the city matches the search query
 */
export function isMatchingQuery(city: City, query: string): boolean {
  const searchFields = [city.name, city.country, city.continent, ...city.landmarks];

  return searchFields.some((field)=> field.toLowerCase().includes(query) )
}
