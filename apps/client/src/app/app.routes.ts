import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./components/city-list/city-list.component').then((m) => m.CityListComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./components/city-details/city-details-component').then((m) => m.CityDetailsComponent),
  },
];
