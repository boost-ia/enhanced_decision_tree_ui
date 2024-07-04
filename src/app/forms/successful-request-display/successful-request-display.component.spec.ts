import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulRequestDisplayComponent } from './successful-request-display.component';

describe('SuccessfulRequestDisplayComponent', () => {
  let component: SuccessfulRequestDisplayComponent;
  let fixture: ComponentFixture<SuccessfulRequestDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessfulRequestDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulRequestDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
