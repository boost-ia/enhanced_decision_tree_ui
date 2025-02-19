import { Injectable } from '@angular/core';
import { IsChatShownService } from './is-chat-shown.service';

@Injectable({
  providedIn: 'root'
})
export class ChatCallbacksService {

  constructor(
    private isChatShownService: IsChatShownService
  ) { }

  public executeCallback(callback: string) {
    switch (callback) {
      case 'closeChat':
        this.closeChat();
        break;
      default:
        console.error(`Callback ${callback} not found`);
        break;
    }
  }

  private closeChat() {
    this.isChatShownService.setIsChatShown(false);
  }
}
