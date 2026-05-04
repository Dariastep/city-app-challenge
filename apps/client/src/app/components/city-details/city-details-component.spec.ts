import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityDetailsComponent } from './city-details-component';
import { City } from '@lib/shared';
import { provideRouter } from '@angular/router';
import { CityApiService } from '../../services/city-api.service';
import { of } from 'rxjs';

describe('CityDetails', () => {
  let component: CityDetailsComponent;
  let fixture: ComponentFixture<CityDetailsComponent>;

  const mockedCity: City = {
    id: '7b686d1a-1d5d-4f1e-9c1a-1234567890ab',
    name: 'Madrid',
    nameNative: 'Madrid',
    country: 'Spain',
    continent: 'Europe',
    latitude: 40.416775,
    longitude: -3.70379,
    population: 3223000,
    founded: 1083,
    landmarks: ['Royal Palace', 'Plaza Mayor', 'Plaza de Cibeles'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityDetailsComponent],
      providers: [
        provideRouter([]),
        {
          provide: CityApiService,
          useValue: { getCityById: () => of(mockedCity) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CityDetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render city data', () => {
    fixture.componentRef.setInput('id', '7b686d1a-1d5d-4f1e-9c1a-1234567890ab');
    fixture.detectChanges();

    const content = fixture.nativeElement.textContent;

    expect(content).toContain(mockedCity.name);
    expect(content).toContain(mockedCity.nameNative);
    expect(content).toContain(mockedCity.continent);
    expect(content).toContain('3,223,000');
    expect(content).toContain(mockedCity.longitude.toString());
    expect(content).toContain(mockedCity.latitude.toString());

    mockedCity.landmarks.forEach((landmark) =>
      expect(content).toContain(landmark),
    );
  });
});
