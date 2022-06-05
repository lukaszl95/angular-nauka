import { Component, Input, OnInit } from '@angular/core';
import { PricesService } from '../service/prices.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  
  prices: Array<any> = [];
  
  constructor(private pricesService: PricesService) { 
    this.pricesService.getPriceListObs().subscribe(prices =>{
      this.prices = prices;
    })
  }

  ngOnInit(): void {
  }

}
