import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChatComponent } from '../chat/chat.component';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {


  private chatObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      const { height, width } = entry.contentRect;
      const unit = 'px';
      if(this.deviceService.isMobile()) {
        this.resizeSubject.next({ height: 100, heightUnit: '%', width: 100, widthUnit: '%' });
        return;
      }
      const heightUnit = unit;
      const widthUnit = unit;
      this.resizeSubject.next({ height, heightUnit, width, widthUnit });
    }
  });

  public resizeSubject: Subject<{ height: number, heightUnit: string, width: number, widthUnit: string }> = new Subject<{ height: number, heightUnit: string, width: number, widthUnit: string }>();

  constructor(
    private deviceService: DeviceDetectorService
  ) {
    this.resizeSubject.subscribe(({ height, heightUnit, width, widthUnit }) => {
      this.sendMessageToParent(height, heightUnit, width, widthUnit);
    });
  }

  private sendMessageToParent(height: number, heightUnit: string, width: number, widthUnit: string): void {
    window.parent.postMessage({'action': 'resize', 'height': `${height}${heightUnit}`, 'width': `${width}${widthUnit}` }, '*');
  }

  public setIconSize(): void {
    this.stopChatObserver();
    this.resizeSubject.next({ height: 90, heightUnit: 'px', width: 90, widthUnit: 'px' });
  }

  setFormSize(): void {
    this.stopChatObserver();
    this.resizeSubject.next({ height: 100, heightUnit: '%', width: 100, widthUnit: '%' });
  }

  public startChatObserver(chat: ChatComponent): void {
    this.chatObserver.observe(chat.chatContent.nativeElement);
  }

  public stopChatObserver(): void {
    this.chatObserver.disconnect();
  }

}
