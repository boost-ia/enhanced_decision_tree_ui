import { Component } from '@angular/core';
import { FormDisplayService } from '../../services/form-display.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-successful-request-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './successful-request-display.component.html',
  styleUrl: './successful-request-display.component.scss'
})
export class SuccessfulRequestDisplayComponent {

  constructor(
    private formDisplayService: FormDisplayService
  ) {

  }

  get isLoading(): boolean {
    return this.formDisplayService.isLoading
  }

  get isSuccessful(): boolean {
    return this.formDisplayService.isSentSuccessfull ? this.formDisplayService.isSentSuccessfull : false
  }

}
