import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotStepDisplayComponent } from './chatbot-step-display.component';

describe('ChatbotStepDisplayComponent', () => {
  let component: ChatbotStepDisplayComponent;
  let fixture: ComponentFixture<ChatbotStepDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotStepDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotStepDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
