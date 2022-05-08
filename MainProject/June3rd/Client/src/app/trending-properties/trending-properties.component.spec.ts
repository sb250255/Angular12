import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingPropertiesComponent } from './trending-properties.component';

describe('TrendingPropertiesComponent', () => {
  let component: TrendingPropertiesComponent;
  let fixture: ComponentFixture<TrendingPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
