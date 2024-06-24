import { Component, Input } from '@angular/core';
import { city, historyMessage, message } from '../../models/models';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { CitySelectorComponent } from '../city-selector/city-selector.component';

@Component({
  selector: 'app-history-message',
  standalone: true,
  imports: [CommonModule, CitySelectorComponent],
  templateUrl: './history-message.component.html',
  styleUrl: './history-message.component.scss'
})
export class HistoryMessageComponent {

  @Input() historyMessage!: historyMessage;

  @Input() citySubject$!: Subject<city>;
  @Input() updateMessageSubject!: Subject<message>;

  @Input() correctDecisionSubject$!: Subject<{ messageIdToCorrect: number, messageChoosenId: number }>;

  @Input() currentCity?: city

  constructor() {}

  isDisabled(content: string): boolean {
    return content === this.historyMessage.chosenAnswerContent;
  }

  correctDecision(nextMessageId: number) {
    this.correctDecisionSubject$.next({ messageIdToCorrect: this.historyMessage.message.id, messageChoosenId: nextMessageId });
  }


}
