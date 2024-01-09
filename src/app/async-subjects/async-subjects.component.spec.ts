import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSubjectsComponent } from './async-subjects.component';

describe('AsyncSubjectsComponent', () => {
  let component: AsyncSubjectsComponent;
  let fixture: ComponentFixture<AsyncSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncSubjectsComponent]
    });
    fixture = TestBed.createComponent(AsyncSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
