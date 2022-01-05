import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginErro: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { 
      
      this.loginForm = this.formBuilder.group({
        userEmail: ['', Validators.required],
        userPass: ['', Validators.required]
      });
    }

  ngOnInit(): void {
  }

  login() {
    
    const userEmail = this.loginForm.get('userEmail')?.value;
    const password = this.loginForm.get('userPass')?.value;

    //console.log(userEmail + password);

    this.authService
      .authenticate(userEmail, password)
      .subscribe(
        () => this.router.navigate(['dashboard']),
        err => {
          console.log(err);
          this.loginForm.reset();
          this.loginErro = true;
        }
      );
  }
}
