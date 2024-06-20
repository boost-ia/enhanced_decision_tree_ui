import { Component, Input } from '@angular/core';
import { historyMessage } from '../../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-message.component.html',
  styleUrl: './history-message.component.scss'
})
export class HistoryMessageComponent {

  @Input() historyMessage!: historyMessage;

}
