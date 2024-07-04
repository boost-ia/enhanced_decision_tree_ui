import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImageInputComponent } from '../image-input/image-input.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormDisplayService } from '../../services/form-display.service';
import { SuccessfulRequestDisplayComponent } from '../successful-request-display/successful-request-display.component';
import { form } from '../../models/models';

@Component({
  selector: 'app-fd-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgSelectModule, ImageInputComponent, SuccessfulRequestDisplayComponent],
  templateUrl: './fd-form.component.html',
  styleUrl: './fd-form.component.scss'
})
export class FdFormComponent {

  @ViewChild('picture') pictureInput: ImageInputComponent | undefined

  fdForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    risk: new FormControl('', Validators.required),
    comment: new FormControl('', [Validators.required])
  })

  constructor(
    private formService: FormDisplayService
  ) {

  }

  closeChat() {
    this.formService.close()
  }

  submitForm() {
    this.formService.sendForm(this.fdForm.value, form.FDFORM, this.pictureInput?.getImageFile()!)
  }

  get imageValid(): boolean {
    return this.pictureInput?.isImageValid ? true : false
  }

  get isSuccessful() {
    return this.formService.isSentSuccessfull ? this.formService.isSentSuccessfull : false
  }

}
