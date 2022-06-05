import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { OurServices } from "../model/our-services";


@Injectable()
export class OurService {
    servicesList = new Array<OurServices>();

    servicesListObs = new BehaviorSubject<Array<OurServices>>([]);

    constructor() {
        this.servicesList = [{ header: 'WebDesign 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu varius dui. Nunc id scelerisque ligula.', image: 'http://image.ibb.co/grx9Cw/browser.png'},
        { header: 'WebDesign 2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu varius dui. Nunc id scelerisque ligula.', image: 'http://image.ibb.co/bPf7jb/iphone.png'},
        { header: 'WebDesign 3', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu varius dui. Nunc id scelerisque ligula.', image: 'http://image.ibb.co/n0TSjb/trash.png'},
        { header: 'WebDesign 4', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu varius dui. Nunc id scelerisque ligula.', image: 'http://image.ibb.co/jUYMAG/camera.png'}]

        this.servicesListObs.next(this.servicesList)
    }

    getPriceListObs(): Observable<Array<OurServices>> {
        return this.servicesListObs.asObservable()
      }
}
