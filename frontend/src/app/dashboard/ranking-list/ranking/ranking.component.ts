import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/core/data/data';
import { DataService } from 'src/app/core/data/data.service';

@Component({
  selector: 'cov-ranking',
  templateUrl: './ranking.component.html'
})
export class RankingComponent implements OnInit {

  @Input() criteria: string;
  @Input() desc: string;

  data_list: Data[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRanking(this.criteria)
      .subscribe(
        data => this.data_list = data,
        err => console.log("Erro!"));
  }
}
