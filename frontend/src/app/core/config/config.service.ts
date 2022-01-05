import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const API_URL = environment.API_URL;
const api_routes = {
  token: API_URL + "/token/",
  country: API_URL + "/data/",
  ranking: API_URL + "/data/rank/",
  users: API_URL + "/users/",
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public getURL(){
      return API_URL;
  }

  public apiToken(){
    return api_routes.token;
  }

  public apiPostUser(){
    return api_routes.users;
  }

  public getRandomCountryData(){
    return api_routes.country;
  }

  public getCountryData(country: string){
    return api_routes.country + country;
  }

  public getRanking(criteria: string){
    return api_routes.ranking + criteria + '?limit=5';
  }

}