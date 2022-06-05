import { Component, Input, OnInit } from '@angular/core';
import { OurService } from '../service/our-services.services';



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: Array<any> = [];
  
  constructor(private ourService: OurService) { 
    this.ourService.getPriceListObs().subscribe(services =>{
      this.services = services;
    })
  }

  ngOnInit(): void {
  }

}
