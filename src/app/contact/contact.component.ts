import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Array<any> = [];

  constructor(private contactService: ContactService) { 
    this.contactService.getPriceListObs().subscribe(contact =>{
      this.contact = contact;
    })
  }

  ngOnInit(): void {
  }

}
