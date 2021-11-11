import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CountryComponent } from './country/country.component';
import { RankingListComponent } from './ranking-list/ranking-list.component';
import { RankingComponent } from './ranking-list/ranking/ranking.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CountryComponent,
    RankingListComponent,
    RankingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
