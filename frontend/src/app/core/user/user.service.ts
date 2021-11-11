import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private token: TokenService) { }

  logout(){
    this.token.removeToken();
  }

  isLogged(): Boolean{
    return this.token.hasToken();
  }
}
