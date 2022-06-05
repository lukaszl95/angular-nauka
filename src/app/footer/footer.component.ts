import { Component, Input, OnInit } from '@angular/core';
import { AboutUsService } from '../service/about-us.services';
import { ContactService } from '../service/contact.services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contact: Array<any> =[];

  aboutUs: Array<any> =[];

  constructor(private aboutUsService: AboutUsService, private contactService: ContactService) { 
    this.aboutUsService.getPriceListObs().subscribe(aboutUs =>{
      this.aboutUs = aboutUs;
    })
     
    this.contactService.getPriceListObs().subscribe(contact =>{
      this.contact = contact;
    })
  }

  ngOnInit(): void {
  }

}
