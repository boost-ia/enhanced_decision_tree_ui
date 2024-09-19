import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChatComponent } from '../chat/chat.component';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  pageHeight: number;
  private chat: ChatComponent | undefined;

  private chatObserver = new ResizeObserver(entries => {
    for (let entry of entries) {

      let { height, width } = entry.contentRect;

      const lastChild = entry.target.lastChild;
      const lastChildScrollHeight = (lastChild as HTMLElement)!.scrollHeight;

      const maxPossibleHeightOfChat = lastChildScrollHeight + 30;

      console.log('maxPossibleHeightOfChat', maxPossibleHeightOfChat);
      console.log('this.pageHeight', this.pageHeight);
      console.log('height', height);

      if(maxPossibleHeightOfChat > this.pageHeight*0.9) {
        height = this.pageHeight*0.9;
      } else {
        height = maxPossibleHeightOfChat;
      }

      if(this.deviceService.isMobile()) {
        this.resizeSubject.next({ height: 100, heightUnit: '%', width: 100, widthUnit: '%' });
        return;
      }
      this.resizeSubject.next({ height, heightUnit: 'px', width, widthUnit: 'px' });
    }
  });

  public resizeSubject: Subject<{ height: number, heightUnit: string, width: number, widthUnit: string }> = new Subject<{ height: number, heightUnit: string, width: number, widthUnit: string }>();

  constructor(
    private deviceService: DeviceDetectorService
  ) {
    this.pageHeight = window.innerHeight;

    window.addEventListener('message', (event) => {
      if(event.data.action === 'getHeight') {
        this.pageHeight = event.data.height;
        this.updateChatObserverWithoutChat();
      }
    });
    window.parent.postMessage({'action': 'getHeight'}, '*');

    this.resizeSubject.subscribe(({ height, heightUnit, width, widthUnit }) => {
      this.sendMessageToParent(height, heightUnit, width, widthUnit);
    });
  }

  private sendMessageToParent(height: number, heightUnit: string, width: number, widthUnit: string): void {
    console.log('send message to parent');
    window.parent.postMessage({'action': 'resize', 'height': `${height}${heightUnit}`, 'width': `${width}${widthUnit}` }, '*');
  }

  public setIconSize(): void {
    this.stopChatObserver();
    this.resizeSubject.next({ height: 90, heightUnit: 'px', width: 90, widthUnit: 'px' });
  }

  public startChatObserver(chat: ChatComponent): void {
    this.chat = chat;
    this.chatObserver.observe(chat.chatContent.nativeElement);
  }

  public updateChatObserverWithoutChat(): void {
    this.chatObserver.disconnect();
    if(this.chat) {
      this.startChatObserver(this.chat);
    }
  }

  public stopChatObserver(): void {
    this.chat = undefined;
    this.chatObserver.disconnect();
  }

}
