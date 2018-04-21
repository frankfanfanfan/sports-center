import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerNewComponent } from './owner-new.component';

describe('OwnerNewComponent', () => {
  let component: OwnerNewComponent;
  let fixture: ComponentFixture<OwnerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
