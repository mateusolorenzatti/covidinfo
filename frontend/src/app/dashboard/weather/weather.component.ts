import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/core/weather/weather';
import { WeatherService } from 'src/app/core/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {

  cidade: string = "5425";
  data: Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather(this.cidade)
    .subscribe(
      data => this.data = data ,
      err => console.log("Erro!"));
  }

}
