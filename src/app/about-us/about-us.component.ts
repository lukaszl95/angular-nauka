import { Component, Input, OnInit } from '@angular/core';
import { AboutUsService } from '../service/about-us.services';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {


  aboutUs: Array<any> = [];

  constructor(private aboutUsService: AboutUsService) { 
    this.aboutUsService.getPriceListObs().subscribe(aboutUs =>{
      this.aboutUs = aboutUs;
    })
  }

  ngOnInit(): void {
  }

}
