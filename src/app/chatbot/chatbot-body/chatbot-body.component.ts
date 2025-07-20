import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DiscussionManagerService } from 'src/app/services/discussion-manager.service';
import { ChatbotStepDisplayComponent } from './chatbot-step-display/chatbot-step-display.component';
import { LoadingService } from 'src/app/services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chatbot-body',
  imports: [CommonModule, ChatbotStepDisplayComponent],
  templateUrl: './chatbot-body.component.html',
  styleUrl: './chatbot-body.component.scss',
})
export class ChatbotBodyComponent {
  private scrollSub!: Subscription;

  constructor(
    private hostRef: ElementRef,
    private discussionManager: DiscussionManagerService,
    private loading: LoadingService
  ) {}

  get discussion() {
    return this.discussionManager.discussion;
  }

  get isLoading() {
    return this.loading.loading;
  }

  ngAfterViewInit(): void {
    this.scrollSub = this.discussionManager.scrollToBottom$.subscribe(() =>
      this.scrollToBottom()
    );
  }

  ngOnDestroy(): void {
    this.scrollSub?.unsubscribe();
  }

  private scrollToBottom(): void {
    try {
      const el = this.hostRef.nativeElement;
      el.scrollTo({
        top: el.scrollHeight,
        behavior: 'smooth',
      });
    } catch (err) {
      console.error('Failed to scroll to bottom:', err);
    }
  }
}
