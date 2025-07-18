import { Component, HostBinding } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chatbot-header',
  templateUrl: './chatbot-header.component.html',
  styleUrl: './chatbot-header.component.scss',
})
export class ChatbotHeaderComponent {
  @HostBinding('style.backgroundColor') backgroundColor =
    environment.primaryColor;

  restartChat() {} //TODO: Implement restart chat functionality

  closeChat() {} //TODO: Implement close chat functionality
}
