import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsChatShownService {

  isChatShown: boolean = false;

  constructor() { }

  setIsChatShown(isChatShown: boolean) {
    this.isChatShown = isChatShown;
  }
}
