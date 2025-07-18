import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ChatbotComponent } from './chatbot/chatbot.component';

@Component({
    selector: 'app-root',
    imports: [CommonModule, ChatbotComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chatbot_essonne_numerique';
}
