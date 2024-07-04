import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormDisplayService } from '../../services/form-display.service';
import { SuccessfulRequestDisplayComponent } from '../successful-request-display/successful-request-display.component';
import { form } from '../../models/models';

@Component({
  selector: 'app-fnp-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, SuccessfulRequestDisplayComponent],
  templateUrl: './fnp-form.component.html',
  styleUrl: './fnp-form.component.scss'
})
export class FnpFormComponent {

  fnpForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    actualOutletNumber: new FormControl('', Validators.required),
    totalOutletNumber: new FormControl('', Validators.required)
  }) 

  constructor(
    private formService: FormDisplayService
  ) {

  }

  closeChat() {
    this.formService.close()
  }

  submitForm() {
    this.formService.sendForm(this.fnpForm.value, form.FNPFORM)
  }

  get isSuccessful() {
    return this.formService.isSentSuccessfull ? this.formService.isSentSuccessfull : false
  }

}
