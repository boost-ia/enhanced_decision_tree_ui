import { Component, Input } from '@angular/core';
import { city, form, historyMessage, message, messageContentElement } from '../../models/models';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { CitySelectorComponent } from '../city-selector/city-selector.component';
import { FormDisplayService } from '../../services/form-display.service';

@Component({
  selector: 'app-history-message',
  standalone: true,
  imports: [CommonModule, CitySelectorComponent],
  templateUrl: './history-message.component.html',
  styleUrl: './history-message.component.scss'
})
export class HistoryMessageComponent {

  @Input() historyMessage!: historyMessage;

  @Input() citySubject$!: Subject<city | undefined>;
  @Input() updateMessageSubject!: Subject<message>;

  @Input() correctDecisionSubject$!: Subject<{ messageIdToCorrect: number, messageChoosenId: number }>;

  @Input() currentCity?: city

  constructor(
    private formDisplayService: FormDisplayService
  ) {}

  isDisabled(content: string): boolean {
    return content === this.historyMessage.chosenAnswerContent;
  }

  correctDecision(nextMessageId: number) {
    this.correctDecisionSubject$.next({ messageIdToCorrect: this.historyMessage.message.id, messageChoosenId: nextMessageId });
  }

  isContentForForm(content: messageContentElement) {
    return content.isForm ? content.isForm : false
  }

  openForm(content: messageContentElement) {
    console.log(content.formName);
    console.log(form.FBFORM)
    if(!content.formName) return;
    switch(content.formName) {
      case form.FBFORM:
        this.formDisplayService.setForm(form.FBFORM);
        break;
      case form.FMNFORM:
        this.formDisplayService.setForm(form.FMNFORM);
        break;
      case form.FDFORM:
        this.formDisplayService.setForm(form.FDFORM);
        break;
      case form.FMAFORM:
        this.formDisplayService.setForm(form.FMAFORM);
        break;
      case form.FNPFORM:
        this.formDisplayService.setForm(form.FNPFORM);
        break;
      case form.FCSFORM:
        this.formDisplayService.setForm(form.FCSFORM);
        break;
    }
  }

}
