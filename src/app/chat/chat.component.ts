import { Component, ElementRef, ViewChild } from '@angular/core';
import { IsChatShownService } from '../services/is-chat-shown.service';
import { historyMessage, message } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { CurrentMessageComponent } from './current-message/current-message.component';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { HistoryMessageComponent } from './history-message/history-message.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, CurrentMessageComponent, HistoryMessageComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  messagesUrl = '/assets/messages.json';

  chatMessages: message[] = []
  currentMessage?: message;
  chatHistory: historyMessage[] = [];

  updateMessageSubject$ = new Subject<number>();
  updateMessageSubscrition: any;

  constructor(
    private isChatShownService: IsChatShownService,
    private http: HttpClient
  ) {
    this.updateMessageSubscrition = this.updateMessageSubject$.subscribe((id: number) => {
      this.updateMessage(id);
    }); 
  }

  ngOnInit() {
    this.getMessages();
  }

  ngOnDestroy() {
    this.updateMessageSubscrition.unsubscribe();
  }

  getMessages() {
    this.http.get<message[]>(this.messagesUrl).subscribe((data: message[]) => {
      this.chatMessages = data;
      this.currentMessage = this.chatMessages[0];
    });
  }

  closeChat() {
    this.isChatShownService.setIsChatShown(false);
  }

  scrollToBottom() {
    this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
  }

  updateMessage(id: number) {
    if (this.currentMessage) {
      this.addMessageToHistory(this.currentMessage, id);
    }
    this.currentMessage = this.chatMessages[id];
    setTimeout(() => {
      this.scrollToBottom();
    }, 200);
  }

  addMessageToHistory(oldmessage: message, newMessageId: number) {
    this.chatHistory.push({
      id: oldmessage.id,
      content: oldmessage.content,
      chosenAnswerContent: oldmessage.answers.find(answer => answer.nextMessageId === newMessageId)?.content!
    });
  }

}

