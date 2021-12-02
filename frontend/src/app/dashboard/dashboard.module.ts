import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CountryComponent } from './country/country.component';
import { RankingListComponent } from './ranking-list/ranking-list.component';
import { RankingComponent } from './ranking-list/ranking/ranking.component';
import { FooterModule } from '../shared/footer/footer.module';
import { CriptoComponent } from './cripto/cripto.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CountryComponent,
    RankingListComponent,
    RankingComponent,
    CriptoComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    FooterModule
  ]
})
export class DashboardModule { }
