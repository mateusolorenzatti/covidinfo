import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from './city';
import { Weather } from './weather';

const BASE_URL = "https://apiadvisor.climatempo.com.br/api/v1";
const TOKEN = environment.CLIMATEMPO_TOKEN;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getWeather(cityCode: string): Observable<Weather> {
    return this.http
      .get<Weather>(BASE_URL + "/weather/locale/" + cityCode + "/current?token=" + TOKEN );
  }
 
  public getCity(cityName: string): Observable<City[]> {
    return this.http
      .get<City[]>(BASE_URL + '/locale/city?name=' + cityName + '&token=' + TOKEN );
  }
}
