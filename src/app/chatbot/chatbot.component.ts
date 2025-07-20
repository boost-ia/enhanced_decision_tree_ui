import { Component } from '@angular/core';
import { ChatbotHeaderComponent } from './chatbot-header/chatbot-header.component';
import { DiscussionManagerService } from '../services/discussion-manager.service';
import { ChatbotBodyComponent } from './chatbot-body/chatbot-body.component';
import { ChatbotFooterComponent } from './chatbot-footer/chatbot-footer.component';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss',
  imports: [
    ChatbotHeaderComponent,
    ChatbotBodyComponent,
    ChatbotFooterComponent,
  ],
})
export class ChatbotComponent {
  constructor(private discussionManager: DiscussionManagerService) {}
}
