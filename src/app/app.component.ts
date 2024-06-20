import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IsChatShownService } from './services/is-chat-shown.service';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChatComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chatbot_essonne_numerique';

  constructor(
    private isChatShownService: IsChatShownService
  ) { }

  openChat() {
    this.isChatShownService.setIsChatShown(true);
  }

  get isChatShown() {
    return this.isChatShownService.isChatShown;
  }

}
