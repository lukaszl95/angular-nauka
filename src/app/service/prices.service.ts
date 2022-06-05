import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Price } from "../model/price";
import { PriceDescription } from "../model/price-description";

@Injectable()
export class PricesService {

  priceList = new Array<Price>();
  priceItemList1 = new Array<PriceDescription>();
  priceItemList2 = new Array<PriceDescription>();
  priceItemList3 = new Array<PriceDescription>();

  priceListObs = new BehaviorSubject<Array<Price>>([]);

  constructor() {
    this.priceItemList1 = [{name: '2x', text: ' option 1'},
    {name: 'Free', text: ' option 2'},
    {name: 'Unlimited', text: ' option 3'},
    {name: 'Unlimited', text: ' option 4'},
    {name: '1x', text: ' option 5'}]
    this.priceItemList2 = [{name: '2x', text: ' option 1'},
    {name: 'Free', text: ' option 2'},
    {name: 'Unlimited', text: ' option 3'},
    {name: 'Unlimited', text: ' option 4'},
    {name: '1x', text: ' option 5'}]
    this.priceItemList3 = [{name: '2x', text: ' option 1'},
    {name: 'Free', text: ' option 2'},
    {name: 'Unlimited', text: ' option 3'},
    {name: 'Unlimited', text: ' option 4'},
    {name: '1x', text: ' option 5'}]

    this.priceList = [{title: 'Website hosting', price: '$10/month', priceItem: this.priceItemList1},
    {title: 'Website hosting', price: '$10/month', priceItem: this.priceItemList2},
    {title: 'Website hosting', price: '$10/month', priceItem: this.priceItemList3}]

    this.priceListObs.next(this.priceList)
  }

  getPriceListObs(): Observable<Array<Price>> {
    return this.priceListObs.asObservable()
  }
}