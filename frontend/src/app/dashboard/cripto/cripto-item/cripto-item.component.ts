import { Component, Input, OnInit } from '@angular/core';
import { TickerList } from 'src/app/core/cripto/tickerList';

@Component({
  selector: 'app-cripto-item',
  templateUrl: './cripto-item.component.html'
})
export class CriptoItemComponent implements OnInit {

  @Input() ticker: TickerList;

  constructor() { }

  ngOnInit(): void {
  }
}
