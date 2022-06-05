import { Component, Input, OnInit } from '@angular/core';
import { SkillsService } from '../service/skills.services';

@Component({
  selector: 'app-our-skills',
  templateUrl: './our-skills.component.html',
  styleUrls: ['./our-skills.component.css']
})
export class OurSkillsComponent implements OnInit {

  skills: Array<any> = [];
  
  constructor(private skillsService: SkillsService) { 
    this.skillsService.getPriceListObs().subscribe(skills =>{
      this.skills = skills;
    })
  }

  ngOnInit(): void {
  }

}
