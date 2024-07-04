import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImageInputComponent } from '../image-input/image-input.component';
import { FormDisplayService } from '../../services/form-display.service';

@Component({
  selector: 'app-fcs-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ImageInputComponent],
  templateUrl: './fcs-form.component.html',
  styleUrl: './fcs-form.component.scss'
})
export class FcsFormComponent {

  @ViewChild('conventionInput') conventionInput: ImageInputComponent | undefined

  fcsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    conventionDate: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  })

  constructor(
    private formService: FormDisplayService
  ) {

  }

  closeChat() {
    this.formService.close()
  }

  submitForm() {

  }

  get imageValid() {
    return this.conventionInput? this.conventionInput.isImageValid : false
  }

}
