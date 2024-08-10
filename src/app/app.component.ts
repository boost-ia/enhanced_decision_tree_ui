import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IsChatShownService } from './services/is-chat-shown.service';
import { ChatComponent } from './chat/chat.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import { FbFormComponent } from './forms/fb-form/fb-form.component';
import { FormDisplayService } from './services/form-display.service';
import { FmnFormComponent } from './forms/fmn-form/fmn-form.component';
import { form } from './models/models';
import { FdFormComponent } from './forms/fd-form/fd-form.component';
import { FmaFormComponent } from './forms/fma-form/fma-form.component';
import { FnpFormComponent } from './forms/fnp-form/fnp-form.component';
import { FcsFormComponent } from './forms/fcs-form/fcs-form.component';
import { ResizeService } from './services/resize.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChatComponent, FbFormComponent, FmnFormComponent, FdFormComponent, FmaFormComponent, FnpFormComponent, FcsFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild('mainChat') mainChat!: ChatComponent;

  title = 'chatbot_essonne_numerique';
  formNames = form

  constructor(
    private isChatShownService: IsChatShownService,
    public formDisplayService: FormDisplayService,
    private deviceService: DeviceDetectorService,
    private resizeService: ResizeService
  ) {
    if (this.deviceService.isMobile()) {
      this.isChatShownService.setIsChatShown(false);
    } else {
      this.isChatShownService.setIsChatShown(true);
    }
  }

  ngAfterViewInit() {
    if(this.isMobile) {
      this.resizeService.setIconSize();
    } else {
      this.resizeService.startChatObserver(this.mainChat);
    }

  }

  openChat() {
    this.isChatShownService.setIsChatShown(true);
    this.resizeService.startChatObserver(this.mainChat);
  }

  get isChatShown() {
    return this.isChatShownService.isChatShown;
  }

  get isMobile() {
    return this.deviceService.isMobile();
  }

}
