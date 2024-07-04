import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcsFormComponent } from './fcs-form.component';

describe('FcsFormComponent', () => {
  let component: FcsFormComponent;
  let fixture: ComponentFixture<FcsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FcsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
