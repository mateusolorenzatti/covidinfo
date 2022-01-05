import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  newUserForm: FormGroup;
  erro: boolean = false;
  help: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    this.newUserForm = this.formBuilder.group({
      userName: [null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userEmail: [null,
        [
          Validators.required,
          Validators.email
        ]
      ],
      userPass: [null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      confirmUserPass: [null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ]
    });
  }

  ngOnInit(): void { }

  createUser() {
    const name = this.newUserForm.get('userName')?.value;
    const email = this.newUserForm.get('userEmail')?.value;
    const password = this.newUserForm.get('userPass')?.value;
    // console.log(user);

    this.help = true;

    if (password != this.newUserForm.get('confirmUserPass')?.value) {
      this.newUserForm.reset();
      this.erro = true;
      this.help = false;
      return;
    }

    this.authService
      .signUp(name, email, password)
      .subscribe(
        () => this.router.navigate(['']),
        err => {
          console.log(err);
          this.newUserForm.reset();
          this.erro = true;
          this.help = false;
        }
      );

  }
}
