import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryMessageComponent } from './history-message.component';

describe('HistoryMessageComponent', () => {
  let component: HistoryMessageComponent;
  let fixture: ComponentFixture<HistoryMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
