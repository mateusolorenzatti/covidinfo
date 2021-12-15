import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { City } from 'src/app/core/weather/city';
import { Weather } from 'src/app/core/weather/weather';
import { WeatherService } from 'src/app/core/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {

  @ViewChild('city') cityElement: ElementRef;

  cidade: string = "5425";
  data: Weather;

  constructor(private weatherService: WeatherService, cityElement: ElementRef) {
    this.cityElement = cityElement;
  }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(): void {
    this.weatherService.getWeather(this.cidade)
      .subscribe(
        data => this.data = data,
        err => console.log("Erro!"));
  }

  searchCity() {
    const cityName = this.cityElement.nativeElement.value;

    this.weatherService.getCity(cityName)
      .subscribe(
        cityList => {
          if (!cityList) return

          cityList.forEach(city => {
            if (city.name == cityName) {
              this.cidade = (city.id as unknown) as string;
            }
          });

          this.refreshData();
        },
        err => console.log("Erro!")
      );
  }

}
