import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotFooterComponent } from './chatbot-footer.component';

describe('ChatbotFooterComponent', () => {
  let component: ChatbotFooterComponent;
  let fixture: ComponentFixture<ChatbotFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
