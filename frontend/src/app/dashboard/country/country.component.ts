import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Data } from 'src/app/core/data/data';
import { DataService } from 'src/app/core/data/data.service';

@Component({
  selector: 'cov-country',
  templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit {

  @ViewChild('country', { static: true }) countryElement: ElementRef;
  data: Data;

  constructor(
    private dataService: DataService,
    countryElement: ElementRef) {
    this.countryElement = countryElement;
  }

  ngOnInit(): void {
    this.dataService.getRandomCountryData()
      .subscribe(
        data => this.data = data,
        err => console.log("Erro!"));
  }

  refresh(){
    const country = this.countryElement.nativeElement.value;

    this.dataService.getCountryData(country)
      .subscribe(
        data => data.country ? this.data = data : null,
        err => console.log("Erro!"));

        this.countryElement.nativeElement.value = '';
  }

}
