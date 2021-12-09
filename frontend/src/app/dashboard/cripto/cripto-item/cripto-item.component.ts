import { Component, Input, OnInit } from '@angular/core';
import { Ticker } from 'src/app/core/cripto/ticker';

@Component({
  selector: 'app-cripto-item',
  templateUrl: './cripto-item.component.html'
})
export class CriptoItemComponent implements OnInit {

  @Input() coin: string;
  @Input() ticker: Ticker;

  constructor() { }

  ngOnInit(): void {
  }
}
