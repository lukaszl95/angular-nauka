import { Component, OnInit, Input } from '@angular/core';
import { SliderService } from '../service/slider.services';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  slides: Array<any> = [];

  constructor(private sliderService: SliderService) { 
    this.sliderService.getPriceListObs().subscribe(slides =>{
      this.slides = slides;
    })
  }

  ngOnInit(): void {
  }
}
