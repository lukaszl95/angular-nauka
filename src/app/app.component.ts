import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-nauka';

  slideList = new Array<Slide>();

  servicesList = new Array<Services>();

  portfolioList = new Array<Portfolio>();
  portfolioItemList1 = new Array<PortfolioItem>();
  portfolioItemList2 = new Array<PortfolioItem>();
  portfolioItemList3 = new Array<PortfolioItem>();
  portfolioItemList4 = new Array<PortfolioItem>();

  /*priceList = new Array<Prices>();
  priceItemList1 = new Array<PriceItem>();
  priceItemList2 = new Array<PriceItem>();
  priceItemList3 = new Array<PriceItem>();*/

  aboutUsList = new Array<AboutUs>();

  skillsList = new Array<Skills>();

  contactList = new Array<Contact>();

  constructor() {
    //SLIDER
    this.slideList.push(
      new Slide('Los Angeles',
        'LA is always so much fun!',
        'https://convertingcolors.com/plain-313338.svg'),
      new Slide('Chicago',
        'Thank you, Chicago!',
        'https://convertingcolors.com/plain-313338.svg'),
      new Slide('New York',
        'We love the Big Apple!',
        'https://convertingcolors.com/plain-313338.svg'))

    //SERVICES
    this.servicesList.push(
      new Slide('WebDesign 1',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu varius dui. Nunc id scelerisque ligula.',
        'http://image.ibb.co/grx9Cw/browser.png'),
      new Slide('WebDesign 2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu varius dui. Nunc id scelerisque ligula.',
        'http://image.ibb.co/bPf7jb/iphone.png'),
      new Slide('WebDesign 3',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu varius dui. Nunc id scelerisque ligula.',
        'http://image.ibb.co/n0TSjb/trash.png'),
      new Slide('WebDesign 4',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu varius dui. Nunc id scelerisque ligula.',
        'http://image.ibb.co/jUYMAG/camera.png'))

    //PORTFOLIO
    this.portfolioItemList1.push(
      new PortfolioItem('Clean night sky', 'designe1', 1, 1, 'http://image.ibb.co/j3vNZb/photo.png'),
      new PortfolioItem('Clean night sky', 'designe1', 2, 2, 'http://image.ibb.co/j3vNZb/photo.png'),
      new PortfolioItem('Clean night sky', 'designe1', 3, 3, 'http://image.ibb.co/j3vNZb/photo.png'),
      new PortfolioItem('Clean night sky', 'designe1', 4, 4, 'http://image.ibb.co/j3vNZb/photo.png'),
      new PortfolioItem('Clean night sky', 'designe1', 5, 5, 'http://image.ibb.co/j3vNZb/photo.png'),
      new PortfolioItem('Clean night sky', 'designe1', 6, 6, 'http://image.ibb.co/j3vNZb/photo.png'),
      new PortfolioItem('Clean night sky', 'designe1', 7, 7, 'http://image.ibb.co/j3vNZb/photo.png'),
      new PortfolioItem('Clean night sky', 'designe1', 8, 8, 'http://image.ibb.co/j3vNZb/photo.png'))
    this.portfolioItemList2.push(
      new PortfolioItem('Clean night sky', 'designe2', 1, 1, 'http://image.ibb.co/j3vNZb/photo.png'),
      new PortfolioItem('Clean night sky', 'designe2', 2, 2, 'http://image.ibb.co/j3vNZb/photo.png'),
      new PortfolioItem('Clean night sky', 'designe2', 3, 3, 'http://image.ibb.co/j3vNZb/photo.png'),
      new PortfolioItem('Clean night sky', 'designe2', 4, 4, 'http://image.ibb.co/j3vNZb/photo.png'))
    this.portfolioItemList3.push(
      new PortfolioItem('Clean night sky', 'designe3', 1, 1, 'http://image.ibb.co/j3vNZb/photo.png'),
      new PortfolioItem('Clean night sky', 'designe3', 2, 2, 'http://image.ibb.co/j3vNZb/photo.png'),
      new PortfolioItem('Clean night sky', 'designe3', 3, 3, 'http://image.ibb.co/j3vNZb/photo.png'))
    this.portfolioItemList4.push(
      new PortfolioItem('Clean night sky', 'designe4', 1, 1, 'http://image.ibb.co/j3vNZb/photo.png'),
      new PortfolioItem('Clean night sky', 'designe4', 2, 2, 'http://image.ibb.co/j3vNZb/photo.png'),
      new PortfolioItem('Clean night sky', 'designe4', 3, 3, 'http://image.ibb.co/j3vNZb/photo.png'))

    this.portfolioList.push(
      new Portfolio('Web-designe', this.portfolioItemList1))
    this.portfolioList.push(
      new Portfolio('UI-designe', this.portfolioItemList2))
    this.portfolioList.push(
      new Portfolio('Prototype', this.portfolioItemList3))
    this.portfolioList.push(
      new Portfolio('Photography', this.portfolioItemList4))


    //PRICES
    /*this.priceItemList1.push(
      new PriceItem('2x', ' option 1'),
      new PriceItem('Free2', ' option 2'),
      new PriceItem('Unlimited', ' option 3'),
      new PriceItem('Unlimited', ' option 4'),
      new PriceItem('1x', ' option 5'))
    this.priceItemList2.push(
      new PriceItem('2x', ' option 1'),
      new PriceItem('Free2', ' option 2'),
      new PriceItem('Unlimited', ' option 3'),
      new PriceItem('Unlimited', ' option 4'),
      new PriceItem('1x', ' option 5'))
    this.priceItemList3.push(
      new PriceItem('2x', ' option 1'),
      new PriceItem('Free2', ' option 2'),
      new PriceItem('Unlimited', ' option 3'),
      new PriceItem('Unlimited', ' option 4'),
      new PriceItem('1x', ' option 5'))

    this.priceList.push(
      new Prices('Website hosting',
        '$10/month',
        this.priceItemList1),
      new Prices('Website hosting',
        '$10/month',
        this.priceItemList2),
      new Prices('Website hosting',
        '$10/month',
        this.priceItemList3))*/

    //ABOUT US
    this.aboutUsList.push(
      new AboutUs('Mark Cream',
        'Developer',
        'Curabitur congue libero mi, et lacinia sem blandit sit amet. Donec eu mi non magna rhoncus bibendum et eu dui. Nunc iaculis placerat sapien vel imperdiet',
        'http://image.ibb.co/gGEfLG/photo_1.png'),
      new AboutUs('Antonio Paramo',
        'Fire Effects',
        'Etiam pulvinar libero et scelerisque cursus. Sed eu nisl congue, gravida urna imperdiet, laoreet dolor. Morbi adipiscing neque erat, tincidunt porttitor est vestibulum ac.',
        'http://image.ibb.co/gE42Zb/photo_2.png'),
      new AboutUs('Mario Ballote',
        'Big Boss',
        'Donec at pulvinar dolor, et lobortis est. Phasellus nibh nisi, blandit non velit sit amet, pulvinar vehicula nulla.',
        'http://image.ibb.co/dC7NZb/photo_3.png'),
      new AboutUs('Ben Bugatton',
        'Designer',
        'Mauris dignissim felis quis justo malesuada gravida. Sed quis neque condimentum, luctus augue in, dapibus sapien.',
        'http://image.ibb.co/gqTqLG/11.png'))

    //OUR SKILLS
    this.skillsList.push(
      new Skills('WEB-DESIGN', ' 35%'),
      new Skills('CREATIVE', ' 85%'),
      new Skills('UI-DESIGN', ' 95%'),
      new Skills('PROTOTYPES', ' 25%'),
      new Skills('PHOTOGRAPHY', ' 50%'))

    //CONTACT
    this.contactList.push(
      new Contact('(555) 888 555 03 20',
        'info@domain.com',
        'skype: username',
        'John Dowl',
        'Salt Talke city. UT',
        '87550'))
  }
}

class Slide {
  constructor(public header: string, public text: string, public image: string) { }
}
class Services {
  constructor(public header: string, public text: string, public image: string) { }
}
class Portfolio {
  constructor(public name: string, public portfolioItem: Array<PortfolioItem>) { }
}
class PortfolioItem {
  constructor(public header: string, public text: string, public likes: number, public views: number, public image: string) { }
}
/*class Prices 
  constructor(public title: string, public price: string, public priceItem: Array<PriceItem>) { }
}
class PriceItem {
  constructor(public name: string, public text: string) { }
}*/
class AboutUs {
  constructor(public name: string, public job: string, public text: string, public image: string) { }
}
class Skills {
  constructor(public name: string, public percent: string) { }
}
class Contact {
  constructor(public phone: string, public email: string, public skype: string, public fullName: string, public street: string, public zipCode: string) { }
}