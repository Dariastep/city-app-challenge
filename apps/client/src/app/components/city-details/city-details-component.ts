import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatDivider, MatList, MatListItem } from '@angular/material/list';
import { DecimalPipe } from '@angular/common';
import { CityApiService } from '../../services/city-api.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { filter, switchMap } from 'rxjs';
import { MatProgressBar } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-city-details',
  imports: [
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatIcon,
    MatDivider,
    MatCardContent,
    MatCardActions,
    DecimalPipe,
    MatCard,
    MatProgressBar,
    MatList,
    MatListItem,
    RouterLink,
    MatButton,
  ],
  templateUrl: './city-details-component.html',
  styleUrl: './city-details-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityDetailsComponent {
  private readonly cityApiService = inject(CityApiService);

  id = input<string>();

  city = toSignal(
    toObservable(this.id).pipe(
      filter((id): id is string => !!id),
      switchMap((id) => this.cityApiService.getCityById(id)),
    ),
  );
}
