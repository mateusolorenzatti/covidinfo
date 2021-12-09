import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TickerList } from './tickerList';

const BASE_URL = "https://www.mercadobitcoin.net/api";

@Injectable({
  providedIn: 'root'
})
export class CriptoService {

  constructor(private http: HttpClient) { }

  public getTicker(coin: string): Observable<TickerList> {
    return this.http
      .get<TickerList>(BASE_URL + "/" + coin + "/ticker/");
  }
}
