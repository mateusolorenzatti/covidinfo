import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ]
})
export class NavbarModule { }
