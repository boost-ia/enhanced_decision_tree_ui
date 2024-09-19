import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-fb-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './fb-form.component.html',
  styleUrl: './fb-form.component.scss'
})
export class FbFormComponent {

  fbForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    operator: new FormControl('', [Validators.required]),
    incidentDate: new FormControl('', [Validators.required]),
    incidentNumber: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required])
  })

  getForm() {
    return this.fbForm.value;
  }

  get isDisabled() {
    return this.fbForm.invalid;
  }

}
