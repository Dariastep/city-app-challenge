import { ComponentFixture, TestBed } from '@angular/core/testing';
import CityDetailsComponent from './city-details-component';

describe('CityDetails', () => {
  let component: CityDetailsComponent;
  let fixture: ComponentFixture<CityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CityDetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
