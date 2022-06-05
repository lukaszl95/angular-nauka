import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Skills } from "../model/skills";


@Injectable()
export class SkillsService {
    skillsList = new Array<Skills>();

    skillsListObs = new BehaviorSubject<Array<Skills>>([]);

    constructor() {
        this.skillsList = [{ name: 'WEB-DESIGN', percent: ' 35%'},
        { name: 'CREATIVE', percent: ' 85%'},
        { name: 'UI-DESIGN', percent: ' 95%'},
        { name: 'PROTOTYPES', percent: ' 25%'},
        { name: 'PHOTOGRAPHY', percent: ' 50%'}]

        this.skillsListObs.next(this.skillsList)
    }

    getPriceListObs(): Observable<Array<Skills>> {
        return this.skillsListObs.asObservable()
      }
}
