import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, viewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormDisplayService } from '../../services/form-display.service';
import { form } from '../../models/models';
import { ImageInputComponent } from '../image-input/image-input.component';

@Component({
  selector: 'app-fmn-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgSelectModule, ImageInputComponent],
  templateUrl: './fmn-form.component.html',
  styleUrl: './fmn-form.component.scss'
})
export class FmnFormComponent {

  @ViewChild('screenShot') screenShotInput: ImageInputComponent | undefined
  @ViewChild('certificate') screenShotCertificateInput: ImageInputComponent | undefined

  fmnForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    firstDemandDate: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    dossierNumber: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required])
  })

  operators: string[] = []

  constructor(
    private httpClient: HttpClient,
    private formService: FormDisplayService
  ) {
    this.httpClient.get('/assets/operators.json').subscribe({
      next: (operators: any) => {
        this.operators = operators
      }
    })
  }

  closeChat() {
    this.formService.close()
  }

  submitForm() {
    this.formService.sendForm(this.fmnForm.value, form.FMNFORM)
  }

  get imageValid(): boolean {
    console.log('imageValid get')
    console.log(this.screenShotInput?.isImageValid);
    console.log(this.screenShotCertificateInput?.isImageValid);
    return this.screenShotInput?.isImageValid && this.screenShotCertificateInput?.isImageValid ? true : false
  }

}
