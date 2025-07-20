import { Component, Input } from '@angular/core';
import { DiscussionStep } from 'src/app/models/models';
import { BlockDisplayComponent } from './block-display/block-display.component';
import { CommonModule } from '@angular/common';
import { DiscussionManagerService } from 'src/app/services/discussion-manager.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chatbot-step-display',
  imports: [BlockDisplayComponent, CommonModule],
  templateUrl: './chatbot-step-display.component.html',
  styleUrl: './chatbot-step-display.component.scss',
})
export class ChatbotStepDisplayComponent {
  constructor(private DiscussionManager: DiscussionManagerService) {}

  @Input() step!: DiscussionStep;

  ngOnInit(): void {
    console.log('Displaying step:', this.step.node.id);
  }

  onResponseClick(nodeId: number, nextNodeId: number): void {
    this.DiscussionManager.onResponseClick(nodeId, nextNodeId);
  }
}
