import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PdfInputComponent } from '../pdf-input/pdf-input.component';
import { cities } from '../../utils/city';

@Component({
  selector: 'app-fb-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgSelectModule, PdfInputComponent],
  templateUrl: './fb-form.component.html',
  styleUrl: './fb-form.component.scss'
})
export class FbFormComponent {

  cities = cities
  @ViewChild('attachedPiece') attachedPieceInput: PdfInputComponent | undefined

  fbForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    operator: new FormControl('', [Validators.required]),
    incidentDate: new FormControl('', [Validators.required]),
    incidentNumber: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required])
  })

  getForm() {
    return this.fbForm.value;
  }

  getAttachedPiece() {
    return this.attachedPieceInput?.pdf;
  }

  cityLabel(city: any) {
    return `${city.name} (${city.postalCode})`;
  }

  get isDisabled() {
    if(this.fbForm.invalid) {
      return true;
    }
    return false;
  }

}
