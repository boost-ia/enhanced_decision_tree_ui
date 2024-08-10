import { Injectable } from '@angular/core';
import { form } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { ResizeService } from './resize.service';

@Injectable({
  providedIn: 'root'
})
export class FormDisplayService {

  formDisplay: form | undefined;
  endpoint = 'http://localhost:8080/form-endpoint';

  isLoading: boolean = false;
  isSentSuccessfull?: boolean;

  constructor(
    private http: HttpClient,
    private resizeService: ResizeService
  ) { }

  setForm(form: form) {
    this.resizeService.setFormSize();
    this.formDisplay = form
  }

  close() {
    this.formDisplay = undefined;
  }

  sendForm(form: any, formName: form, screenShot?: File, certificateScreenShot?: File) {
    this.isLoading = false
    let finalForm = new FormData();
    finalForm.append('formName', formName as unknown as string);

    for (let key in form) {
      if (form.hasOwnProperty(key)) {
        finalForm.append(key, form[key]);
      }
    }
    if(screenShot) {
      finalForm.append('screenShot', screenShot);
    }
    if(certificateScreenShot) {
      finalForm.append('certificateScreenShot', certificateScreenShot);
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
