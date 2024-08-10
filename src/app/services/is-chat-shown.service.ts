import { Injectable } from '@angular/core';
import { ResizeService } from './resize.service';

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