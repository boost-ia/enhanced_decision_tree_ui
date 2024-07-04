import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmnFormComponent } from './fmn-form.component';

describe('FmnFormComponent', () => {
  let component: FmnFormComponent;
  let fixture: ComponentFixture<FmnFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmnFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
