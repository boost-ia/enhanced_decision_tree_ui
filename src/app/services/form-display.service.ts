import { Injectable } from '@angular/core';
import { form } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class FormDisplayService {

  openForm(form: form) {
    let url = "https://chatbot.essonnenumerique.com/form";
    url += "?form=" + form.toString();
    window.open(url, "_blank");
  }

}
