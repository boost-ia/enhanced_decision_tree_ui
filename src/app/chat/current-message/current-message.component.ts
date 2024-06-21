import { Component, Input } from '@angular/core';
import { city, message } from '../../models/models';
import { CommonModule } from '@angular/common';
import { CitySelectorComponent } from '../city-selector/city-selector.component';

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

  updateMessage(id: number) {
    this.updateMessageSubject$.next(id);
  }

}
