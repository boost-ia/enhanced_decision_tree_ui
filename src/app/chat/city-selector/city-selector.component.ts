import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Subject } from 'rxjs';
import { city } from '../../models/models';

@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [FormsModule, NgSelectModule],
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.scss'
})
export class CitySelectorComponent {

  city: city[] = []
  @Input() selectedCity?: city;

  @Input() citySubject$!: Subject<any>;
  citySubjectSubscription: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getCityList();
  }

  updateChoosenCity() {
    this.citySubject$.next(this.selectedCity)
  }

  onClear() {
    this.citySubject$.next(undefined)
  }

  getCityList() {
    this.http.get<city[]>('/assets/city.json').subscribe((data: city[]) => {
      this.city = data;
    });
  }

}