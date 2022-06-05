import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-nauka';

  portfolioList = new Array<Portfolio>();
  portfolioItemList1 = new Array<PortfolioItem>();
  portfolioItemList2 = new Array<PortfolioItem>();
  portfolioItemList3 = new Array<PortfolioItem>();
  portfolioItemList4 = new Array<PortfolioItem>();

  constructor() {

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

  }
}


class Portfolio {
  constructor(public name: string, public portfolioItem: Array<PortfolioItem>) { }
}
class PortfolioItem {
  constructor(public header: string, public text: string, public likes: number, public views: number, public image: string) { }
}