import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'cov-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    console.log("Opa");

    this.userService.logout();

    this.router.navigate(['']);
  }

  isLogged(){ 
    return this.userService.isLogged();
  }
}
