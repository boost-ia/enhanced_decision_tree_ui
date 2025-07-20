import { Component } from '@angular/core';
import { DiscussionManagerService } from 'src/app/services/discussion-manager.service';

@Component({
  selector: 'app-chatbot-header',
  templateUrl: './chatbot-header.component.html',
  standalone: true,
  styleUrl: './chatbot-header.component.scss',
})
export class ChatbotHeaderComponent {
  constructor(private discussionManager: DiscussionManagerService) {}

  restartChat() {
    this.discussionManager.restartDiscussion();
  }

  closeChat() {} //TODO: Implement close chat functionality
}
