import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const API_URL = environment.API_URL;
const api_routes = {
  token: API_URL + "/token/",
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

}