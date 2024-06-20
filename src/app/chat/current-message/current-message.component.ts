import { Component, Input } from '@angular/core';
import { message } from '../../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-message.component.html',
  styleUrl: './current-message.component.scss'
})
export class CurrentMessageComponent {

  @Input() currentMessage!: message;
  @Input() updateMessageSubject$!: any;

  updateMessage(id: number) {
    this.updateMessageSubject$.next(id);
  }

}
