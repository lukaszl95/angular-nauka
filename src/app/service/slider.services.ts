import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Slide } from "../model/slide";

@Injectable()
export class SliderService {
    slideList = new Array<Slide>();

    slideListObs = new BehaviorSubject<Array<Slide>>([]);

    constructor() {
        this.slideList = [{ header: 'Los Angeles', text: 'LA is always so much fun!', image: 'https://convertingcolors.com/plain-313338.svg'},
        { header: 'Chicago', text: 'Thank you, Chicago!', image: 'https://convertingcolors.com/plain-313338.svg'},
        { header: 'New York', text: 'We love the Big Apple!', image: 'https://convertingcolors.com/plain-313338.svg'}]

        this.slideListObs.next(this.slideList)
    }

    getPriceListObs(): Observable<Array<Slide>> {
        return this.slideListObs.asObservable()
      }
}
