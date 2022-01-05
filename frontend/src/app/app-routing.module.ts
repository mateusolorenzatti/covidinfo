import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRequiredGuard } from './core/auth/login-required.guard';
import { RedirectIfLoggedGuard } from './core/auth/redirect-if-logged.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    canActivate: [RedirectIfLoggedGuard]
  },
  {
    path: 'signup',
    pathMatch: 'full',
    component: SignupComponent,
    canActivate: [RedirectIfLoggedGuard]
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
    canActivate: [LoginRequiredGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
