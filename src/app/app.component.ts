import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IsChatShownService } from './services/is-chat-shown.service';
import { ChatComponent } from './chat/chat.component';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'chatbot_essonne_numerique';

  constructor(
    private isChatShownService: IsChatShownService,
    private deviceService: DeviceDetectorService
  ) {
    if (this.deviceService.isMobile()) {
      this.isChatShownService.setIsChatShown(false);
    } else {
      this.isChatShownService.setIsChatShown(true);
    }
  }

  openChat() {
    this.isChatShownService.setIsChatShown(true);
  }

  get isChatShown() {
    return this.isChatShownService.isChatShown;
  }

}
