import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';

import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  public getRandomCountryData(): Observable<Data> {
    return this.http
      .get<Data>(this.config.getRandomCountryData());
  }

  public getCountryData(country: string): Observable<Data> {
    return this.http
      .get<Data>(this.config.getCountryData(country));
  }

  public getRanking(criteria: string): Observable<Data[]> {
    return this.http
      .get<Data[]>(this.config.getRanking(criteria));
  }
}
