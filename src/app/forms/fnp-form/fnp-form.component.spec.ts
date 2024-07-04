import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnpFormComponent } from './fnp-form.component';

describe('FnpFormComponent', () => {
  let component: FnpFormComponent;
  let fixture: ComponentFixture<FnpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FnpFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FnpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
