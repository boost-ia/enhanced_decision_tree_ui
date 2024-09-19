import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-fnp-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
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

  getForm() {
    return this.fnpForm.value;
  }

  get isDisabled() {
    return this.fnpForm.invalid;
  }

}
