import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotBodyComponent } from './chatbot-body.component';

describe('ChatbotBodyComponent', () => {
  let component: ChatbotBodyComponent;
  let fixture: ComponentFixture<ChatbotBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
