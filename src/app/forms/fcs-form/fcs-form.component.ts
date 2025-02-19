import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImageInputComponent } from '../image-input/image-input.component';
import { FormDisplayService } from '../../services/form-display.service';
import { form } from '../../models/models';
import { PdfInputComponent } from '../pdf-input/pdf-input.component';
import { CommonModule } from '@angular/common';
import { cities } from '../../utils/city';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-fcs-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, PdfInputComponent, CommonModule, NgSelectModule],
  templateUrl: './fcs-form.component.html',
  styleUrl: './fcs-form.component.scss'
})
export class FcsFormComponent {

  cities = cities
  @ViewChild('conventionInput') conventionInput: PdfInputComponent | undefined

  fcsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    conventionDate: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  })

  constructor(
    private formService: FormDisplayService
  ) {

  }

  getForm() {
    return this.fcsForm.value;
  }

  getConvention() {
    return this.conventionInput?.pdf;
  }

  cityLabel(city: any) {
    return `${city.name} (${city.postalCode})`;
  }

  get isDisabled() {
    if(this.fcsForm.invalid) {
      return true;
    }

    if(!this.conventionInput?.isThereAPdf) {
      return true;
    }

    return false;
  }

}
