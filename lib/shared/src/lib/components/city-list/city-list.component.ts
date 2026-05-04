import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'city-list',
  imports: [],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export  class CityListComponent {}
