import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanDashboardComponent } from './fan-dashboard.component';

describe('FanDashboardComponent', () => {
  let component: FanDashboardComponent;
  let fixture: ComponentFixture<FanDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
