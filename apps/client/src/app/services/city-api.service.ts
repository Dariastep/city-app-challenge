import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { City } from '@lib/models';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CityApiService {
  private readonly httpClient = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:3000/api/cities';

  getAllCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getCityById(id: string): Observable<City> {
    return this.httpClient.get<City>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let message = 'An unexpected error occurred.';
    if (error.status === 404) message = 'City not found.';
    if (error.status === 0) message = 'Network error. Please contact your administrator';

    return throwError(() => new Error(message));
  }
}
