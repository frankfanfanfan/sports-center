import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanEditComponent } from './fan-edit.component';

describe('FanEditComponent', () => {
  let component: FanEditComponent;
  let fixture: ComponentFixture<FanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
