import { Component, Input } from '@angular/core';
import { city, form, message, messageContentElement } from '../../models/models';
import { CommonModule } from '@angular/common';
import { CitySelectorComponent } from '../city-selector/city-selector.component';
import { FormDisplayService } from '../../services/form-display.service';

@Component({
  selector: 'app-current-message',
  standalone: true,
  imports: [CommonModule, CitySelectorComponent],
  templateUrl: './current-message.component.html',
  styleUrl: './current-message.component.scss'
})
export class CurrentMessageComponent {

  @Input() currentMessage!: message;
  @Input() updateMessageSubject$!: any;
  @Input() citySubject$!: any;
  @Input() currentCity?: city;

  constructor(
    private formDisplayService: FormDisplayService
  ) {

  }

  updateMessage(id: number) {
    this.updateMessageSubject$.next(id);
  }

  isContentForForm(content: messageContentElement) {
    return content.isForm ? content.isForm : false
  }

  openForm(content: messageContentElement) {
    if(!content.formName) return;
    switch(content.formName) {
      case form.FBFORM:
        this.formDisplayService.openForm(form.FBFORM);
        break;
      case form.FMNFORM:
        this.formDisplayService.openForm(form.FMNFORM);
        break;
      case form.FDFORM:
        this.formDisplayService.openForm(form.FDFORM);
        break;
      case form.FMAFORM:
        this.formDisplayService.openForm(form.FMAFORM);
        break;
      case form.FNPFORM:
        this.formDisplayService.openForm(form.FNPFORM);
        break;
      case form.FCSFORM:
        this.formDisplayService.openForm(form.FCSFORM);
        break;
    }
  }

}
