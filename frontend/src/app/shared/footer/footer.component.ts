import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cov-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  @Input('fixed') fixed: string;

  constructor() { }

  ngOnInit(): void {
  }

}
