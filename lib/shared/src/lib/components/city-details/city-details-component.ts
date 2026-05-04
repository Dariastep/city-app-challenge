import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'city-details',
  imports: [],
  templateUrl: './city-details-component.html',
  styleUrl: './city-details-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityDetailsComponent {}
