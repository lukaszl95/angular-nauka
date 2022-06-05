import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Contact } from "../model/contact";

@Injectable()
export class ContactService {
    aboutUsList = new Array<Contact>();

    aboutUsListObs = new BehaviorSubject<Array<Contact>>([]);

    constructor() {
        this.aboutUsList = [{ phone: '(555) 888 555 03 20', email: 'info@domain.com', skype: 'username', fullName: 'John Dowl', street: 'Salt Talke city. UT', zipCode: '87550'}]

        this.aboutUsListObs.next(this.aboutUsList)
    }

    getPriceListObs(): Observable<Array<Contact>> {
        return this.aboutUsListObs.asObservable()
      }
}
