import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMessageComponent } from './current-message.component';

describe('CurrentMessageComponent', () => {
  let component: CurrentMessageComponent;
  let fixture: ComponentFixture<CurrentMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
