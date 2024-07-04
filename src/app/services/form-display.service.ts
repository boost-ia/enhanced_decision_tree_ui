import { Injectable } from '@angular/core';
import { form } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class FormDisplayService {

  formDisplay: form | undefined;
  endpoint = 'https://truc.com';

  constructor() { }

  setForm(form: form) {
    this.formDisplay = form
  }

  close() {
    this.formDisplay = undefined;
  }

  sendForm(form: any, formName: form, screenShot?: File, certificateScreenShot?: File) {
    
  }
}
