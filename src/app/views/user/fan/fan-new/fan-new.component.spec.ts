import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanNewComponent } from './fan-new.component';

describe('FanNewComponent', () => {
  let component: FanNewComponent;
  let fixture: ComponentFixture<FanNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
