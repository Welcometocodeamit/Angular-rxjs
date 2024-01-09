import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectVsObservablesComponent } from './subject-vs-observables.component';

describe('SubjectVsObservablesComponent', () => {
  let component: SubjectVsObservablesComponent;
  let fixture: ComponentFixture<SubjectVsObservablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectVsObservablesComponent]
    });
    fixture = TestBed.createComponent(SubjectVsObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
