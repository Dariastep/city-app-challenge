import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { CityCardComponent } from '../city-card/city-card.component';
import { CityApiService } from '../../services/city-api.service';

@Component({
  selector: 'city-list',
  imports: [CommonModule, CityCardComponent],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityListComponent {
  private readonly cityApiService = inject(CityApiService);

  cities = toSignal(this.cityApiService.getAllCities(), { initialValue: [] });
}
