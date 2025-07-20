import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiscussionManagerService } from 'src/app/services/discussion-manager.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-chatbot-footer',
  imports: [FormsModule],
  templateUrl: './chatbot-footer.component.html',
  styleUrls: ['./chatbot-footer.component.scss'],
})
export class ChatbotFooterComponent {
  constructor(private discussionManager: DiscussionManagerService) {}

  message: string = '';
  sendMessage() {
    this.discussionManager.sendMessage(this.message);
    this.message = '';
    this.autoResizeTextarea();
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  autoResizeTextarea(): void {
    const textarea = document.getElementById(
      'message-input'
    ) as HTMLTextAreaElement;
    if (textarea) {
      textarea.style.height = 'auto'; // reset height
      textarea.style.height = textarea.scrollHeight + 'px'; // set new height
    }
  }

  autoResize(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; // reset height
    textarea.style.height = textarea.scrollHeight + 'px'; // set new height
  }
}
