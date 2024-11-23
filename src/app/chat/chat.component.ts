import { Component, ElementRef, ViewChild, HostBinding } from '@angular/core';
import { IsChatShownService } from '../services/is-chat-shown.service';
import { city, historyMessage, message } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { CurrentMessageComponent } from './current-message/current-message.component';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { HistoryMessageComponent } from './history-message/history-message.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ResizeService } from '../services/resize.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, CurrentMessageComponent, HistoryMessageComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  @ViewChild('chatContent') public chatContent!: ElementRef;

  @HostBinding('class.isMobile') isApplied = false;

  messagesUrl = '/assets/messages.json';

  chatMessages: message[] = []
  currentMessage?: message;
  chatHistory: historyMessage[] = [];

  updateMessageSubject$ = new Subject<number>();
  updateMessageSubscrition: any;

  correctDecisionSubject$ = new Subject<{ messageIdToCorrect: number, messageChoosenId: number }>();
  correctionDecisionSubscription: any;

  citySubject$ = new Subject<city | undefined>();
  citySubjectSubscription: any;
  currentCity?: city;

  constructor(
    private isChatShownService: IsChatShownService,
    private http: HttpClient,
    private deviceService: DeviceDetectorService,
    private resizeService: ResizeService
  ) {
    this.updateMessageSubscrition = this.updateMessageSubject$.subscribe((id: number) => {
      this.updateMessage(id);
    });
    this.citySubjectSubscription = this.citySubject$.subscribe((city: any) =>{
      this.currentCity = city;
      this.handleCityChoice()
    })
    this.correctionDecisionSubscription = this.correctDecisionSubject$.subscribe((data: any) => {
      this.correctDecision(data.messageIdToCorrect, data.messageChoosenId);
    });
    if(this.deviceService.isMobile()) {
      this.isApplied = true
    }
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
    this.resizeService.setIconSize();
    this.isChatShownService.setIsChatShown(false);
  }

  resetChat() {
    this.chatHistory = [];
    this.currentMessage = this.chatMessages[0];
    this.currentCity = undefined;
  }

  scrollToBottom() {
    this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
  }

  updateMessage(id: number) {
    if (this.currentMessage) {
      this.addMessageToHistory(this.currentMessage, id);
      this.resizeService.updateChatObserverWithoutChat();
    }
    this.currentMessage = this.chatMessages[id];
    setTimeout(() => {
      this.scrollToBottom();
    }, 200);
  }

  correctDecision(idFromMessage: number, idChosenMessage: number) {
    //delete all the chat history after the message we want to correct
    this.chatHistory = this.chatHistory.filter(historyMessage => historyMessage.message.id < idFromMessage);

    //add the message we want to correct
    this.addMessageToHistory(this.chatMessages[idFromMessage], idChosenMessage);

    //update the current message
    this.currentMessage = this.chatMessages[idChosenMessage];
  }

  addMessageToHistory(oldmessage: message, newMessageId: number) {
    this.chatHistory.push({
      message: oldmessage,
      chosenAnswerContent: oldmessage.answers.find(answer => answer.nextMessageId === newMessageId)?.content!
    });
  }

  /**
   * Check if a city is in the list or not
   * If it is, redirect to the next content (which is 2)
   * If it is not, create the message based of the informations of the cite, and 
   * In both case, removes all the chat history after the first choice (if there was) and loads the actual content in the chatHistory
   * Because city are ordered, only keep the first and the actual content
   */
  handleCityChoice() {

    this.chatHistory = [this.chatHistory[0]]

    this.currentMessage = this.chatMessages[1] //Where we ask for the city

    //unselect the city
    if(!this.currentCity) {
      return
    }

    if(this.currentCity?.isInEn) {
      this.addMessageToHistory(this.currentMessage!, 2)
      this.currentMessage = this.chatMessages[2]
    }
    if(!this.currentCity?.isInEn) {
      this.addMessageToHistory(this.currentMessage!, 3)
      let message = this.chatMessages[3]
      message.content[0].content = "Sur votre commune, l’Opérateur d’Infrastructure n’est pas Essonne numérique, l'OI ou les OI référents sont : " + this.currentCity?.OIReferent
      message.content[1].link =  this.currentCity?.OILink
      this.currentMessage = message;
    }

  }

  get isMobile() {
    return this.deviceService.isMobile();
  }

}

