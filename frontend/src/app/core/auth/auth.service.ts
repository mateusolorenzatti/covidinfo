import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private token: TokenService) { }

  authenticate(email: string, password: string) {
    return this.http.post<any>(
        this.config.apiToken(), 
        { email, password }, 
        { observe: 'response'} 
      )
      .pipe(tap(res => {
        const authToken = res.body['token'];
        this.token.setToken(authToken);

        console.log(`User ${email} authenticated with token ${authToken}`);
      }));
  }
}
