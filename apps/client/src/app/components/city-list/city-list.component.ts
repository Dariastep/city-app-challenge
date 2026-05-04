import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { CityCardComponent } from '../city-card/city-card.component';
import { CityApiService } from '../../services/city-api.service';
import { MatFormField, MatHint, MatInput, MatLabel } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-city-list',
  imports: [
    CommonModule,
    CityCardComponent,
    MatFormField,
    MatLabel,
    MatIcon,
    MatInput,
    ReactiveFormsModule,
    MatHint,
  ],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityListComponent {
  private readonly cityApiService = inject(CityApiService);

  searchControl = new FormControl('', { nonNullable: true });

  cities = toSignal(
    this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((search) => this.cityApiService.getAllCities(search)),
    ),
    { initialValue: [] },
  );
}
