import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmaFormComponent } from './fma-form.component';

describe('FmaFormComponent', () => {
  let component: FmaFormComponent;
  let fixture: ComponentFixture<FmaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
