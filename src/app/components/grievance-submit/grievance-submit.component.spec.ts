import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceSubmitComponent } from './grievance-submit.component';

describe('GrievanceSubmitComponent', () => {
  let component: GrievanceSubmitComponent;
  let fixture: ComponentFixture<GrievanceSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrievanceSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievanceSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
