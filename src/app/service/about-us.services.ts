import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AboutUs } from "../model/aboutUs";



@Injectable()
export class AboutUsService {
    aboutUsList = new Array<AboutUs>();

    aboutUsListObs = new BehaviorSubject<Array<AboutUs>>([]);

    constructor() {
        this.aboutUsList = [{ name: 'Mark Cream', job: 'Developer', text: 'Curabitur congue libero mi, et lacinia sem blandit sit amet. Donec eu mi non magna rhoncus bibendum et eu dui. Nunc iaculis placerat sapien vel imperdiet', image: 'http://image.ibb.co/gGEfLG/photo_1.png'},
        { name: 'Antonio Paramo', job: 'Fire Effects', text: 'Etiam pulvinar libero et scelerisque cursus. Sed eu nisl congue, gravida urna imperdiet, laoreet dolor. Morbi adipiscing neque erat, tincidunt porttitor est vestibulum ac.', image: 'http://image.ibb.co/gE42Zb/photo_2.png'},
        { name: 'Mario Ballote', job: 'Big Boss', text: 'Donec at pulvinar dolor, et lobortis est. Phasellus nibh nisi, blandit non velit sit amet, pulvinar vehicula nulla.', image: 'http://image.ibb.co/dC7NZb/photo_3.png'},
        { name: 'Ben Bugatton', job: 'Designer', text: 'Mauris dignissim felis quis justo malesuada gravida. Sed quis neque condimentum, luctus augue in, dapibus sapien.', image: 'http://image.ibb.co/gqTqLG/11.png'}]

        this.aboutUsListObs.next(this.aboutUsList)
    }

    getPriceListObs(): Observable<Array<AboutUs>> {
        return this.aboutUsListObs.asObservable()
      }
}
