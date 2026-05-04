import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityListComponent } from './city-list.component';
import { provideRouter } from '@angular/router';
import { CityApiService } from '../../services/city-api.service';
import { of } from 'rxjs';

describe('CityList', () => {
  let component: CityListComponent;
  let fixture: ComponentFixture<CityListComponent>;

  const mockedCities = [
    { id: '1', name: 'Madrid', country: 'Spain' },
    { id: '2', name: 'Munich', country: 'Germany' },
  ];

  let cityApiServiceMock: {
    getAllCities: ReturnType<typeof vi.fn>;
  };

  beforeEach(async () => {
    cityApiServiceMock = {
      getAllCities: vi.fn().mockReturnValue(of([])),
    };

    await TestBed.configureTestingModule({
      imports: [CityListComponent],
      providers: [
        provideRouter([]),
        {
          provide: CityApiService,
          useValue: cityApiServiceMock,
        },
      ],
    }).compileComponents();
  });

  it('should render city cards', () => {
    cityApiServiceMock.getAllCities.mockReturnValue(of(mockedCities));

    fixture = TestBed.createComponent(CityListComponent);
    fixture.detectChanges();

    const cards = fixture.nativeElement.querySelectorAll('city-card');

    expect(cards.length).toBe(2);
  });

  it('should show empty state', () => {
    cityApiServiceMock.getAllCities.mockReturnValue(of([]));

    fixture = TestBed.createComponent(CityListComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('No cities are found.');
  });
});
