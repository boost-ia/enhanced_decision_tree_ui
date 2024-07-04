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
