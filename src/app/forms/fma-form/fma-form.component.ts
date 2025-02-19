import { Component, ViewChild } from '@angular/core';
import { ImageInputComponent } from '../image-input/image-input.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormDisplayService } from '../../services/form-display.service';
import { form } from '../../models/models';
import { PdfInputComponent } from '../pdf-input/pdf-input.component';
import { cities } from '../../utils/city';

@Component({
  selector: 'app-fma-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule, ImageInputComponent, PdfInputComponent],
  templateUrl: './fma-form.component.html',
  styleUrl: './fma-form.component.scss'
})
export class FmaFormComponent {

  cities = cities
  @ViewChild('picture') pictureInput: ImageInputComponent | undefined
  @ViewChild('attachedPiece') attachedPieceInput: PdfInputComponent | undefined

  fmaForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    incorrectAddress: new FormControl('', [Validators.required]),
    correctAddress: new FormControl('', Validators.required),
    city: new FormControl(null, [Validators.required]),
    cartographyLink: new FormControl(''),
    comment: new FormControl('', [Validators.required])
  })

  constructor(
    private formService: FormDisplayService
  ) {

  }

  getForm() {
    return this.fmaForm.value;
  }

  get cartographyValid(): boolean {
    //return true if the link is !empty or the picture is !empty
    if(this.pictureInput?.isThereAnImage) {
      return true;
    }

    return this.fmaForm.get('cartographyLink')?.value !== '';
  }

  getScreenShot() {
    return this.pictureInput?.image;
  }

  getAttachedPiece() {
    return this.attachedPieceInput?.pdf;
  }

  cityLabel(city: any) {
    return `${city.name} (${city.postalCode})`;
  }

  get isDisabled() {
    return this.fmaForm.invalid || !this.cartographyValid;
  }

}
