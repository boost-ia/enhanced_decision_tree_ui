import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdFormComponent } from './fd-form.component';

describe('FdFormComponent', () => {
  let component: FdFormComponent;
  let fixture: ComponentFixture<FdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FdFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
