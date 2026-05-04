import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { City } from '@lib/models';
import { RouterLink } from '@angular/router';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-city-card',
  imports: [
    RouterLink,
    MatCard,
    MatButton,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardActions,
    MatIcon,
  ],
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardComponent {
  city = input.required<City>();
}
