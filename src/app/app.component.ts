import { Component } from '@angular/core';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [ChatbotComponent],
})
export class AppComponent {
  title = 'chatbot_essonne_numerique';

  ngOnInit(): void {
    const primary = environment.primaryColor;
    document.documentElement.style.setProperty('--primary-color', primary);
  }
}
