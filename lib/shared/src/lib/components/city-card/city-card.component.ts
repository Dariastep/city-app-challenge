import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { City } from '../../models/city.model';

@Component({
  selector: 'city-card',
  imports: [],
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardComponent {
  city = input.required<City>();
}
