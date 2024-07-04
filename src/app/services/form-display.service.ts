import { Injectable } from '@angular/core';
import { form } from '../models/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormDisplayService {

  formDisplay: form | undefined;
  endpoint = 'https://truc.com';

  isLoading: boolean = false;
  isSentSuccessfull?: boolean;

  constructor(
    private http: HttpClient
  ) { }

  setForm(form: form) {
    this.formDisplay = form
  }

  close() {
    this.formDisplay = undefined;
  }

  sendForm(form: any, formName: form, screenShot?: File, certificateScreenShot?: File) {
    this.isLoading = false
    let finalForm = {
      ...form,
      formName
    }
    if(screenShot) {
      finalForm = {
        ...finalForm,
        screenShot
      }
    }
    if(certificateScreenShot) {
      finalForm = {
        ...finalForm,
        screenShot
      }
    }
    this.http.post(this.endpoint, finalForm).subscribe({
      next: (response: any) => {
        this.isSentSuccessfull = true;
        this.isLoading = false;
      },
      error: (err: any) => {
        this.isLoading = false;
        this.isSentSuccessfull = false
      }
    })
  }
}
