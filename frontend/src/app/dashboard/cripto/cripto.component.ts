import { Component, OnInit } from '@angular/core';
import { CriptoService } from 'src/app/core/cripto/cripto.service';
import { TickerList } from 'src/app/core/cripto/tickerList';

@Component({
  selector: 'app-cripto',
  templateUrl: './cripto.component.html'
})
export class CriptoComponent implements OnInit {

  coins: string[] = ['DOGE', 'BTC', 'ETH', 'ADA', 'XRP', 'UNI', 'SCCPFT'];
  tickers: TickerList[] = [];

  constructor(private criptoService: CriptoService) { }

  ngOnInit(): void {
    this.coins.forEach((coin) => {

      this.criptoService.getTicker(coin)
      .subscribe(
        data => { 
          data.coin = coin;
          this.tickers.push(data);
        },
        err => console.log("Erro!"));
    })
  }

}
