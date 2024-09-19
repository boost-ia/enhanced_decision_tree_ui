import { Injectable } from '@angular/core';
import { form } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class FormDisplayService {

  openForm(form: form) {
    let url = "http://localhost:4200/form";
    url += "?form=" + form.toString();
    window.open(url, "_blank");
  }

}
