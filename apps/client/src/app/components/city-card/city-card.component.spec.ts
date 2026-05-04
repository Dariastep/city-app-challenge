import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityCardComponent } from './city-card.component';
import { provideRouter, RouterLink } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('CityCard', () => {
  let component: CityCardComponent;
  let fixture: ComponentFixture<CityCardComponent>;

  const mockedCity = {
    id: '7b686d1a-1d5d-4f1e-9c1a-1234567890ab',
    name: 'Madrid',
    country: 'Spain',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CityCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('city', mockedCity);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have routerLink directive', () => {
    const el = fixture.debugElement.query(By.directive(RouterLink));

    expect(el).toBeTruthy();
  });
});
