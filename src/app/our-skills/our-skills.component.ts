import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-skills',
  templateUrl: './our-skills.component.html',
  styleUrls: ['./our-skills.component.css']
})
export class OurSkillsComponent implements OnInit {

  @Input()
  skills: Array<any> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
