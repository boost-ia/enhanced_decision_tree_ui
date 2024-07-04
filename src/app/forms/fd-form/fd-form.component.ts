import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImageInputComponent } from '../image-input/image-input.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormDisplayService } from '../../services/form-display.service';

@Component({
  selector: 'app-fd-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgSelectModule, ImageInputComponent],
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

  }

  get imageValid(): boolean {
    return this.pictureInput?.isImageValid ? true : false
  }

}
