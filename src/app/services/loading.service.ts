import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _isLoading: boolean = false;

  public setLoadingState(state: boolean) {
    this._isLoading = state;
  }

  get loading(): boolean {
    return this._isLoading;
  }
}
