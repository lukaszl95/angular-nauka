import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ServicesComponent } from './our-services/services.component';
import { BanerComponent } from './baner/baner.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SecoundBanerComponent } from './secound-baner/secound-baner.component';
import { PriceComponent } from './price/price.component';
import { QuoteComponent } from './quote/quote.component';
import { ThirdBanerComponent } from './third-baner/third-baner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurSkillsComponent } from './our-skills/our-skills.component';
import { FourthBanerComponent } from './fourth-baner/fourth-baner.component';
import { ContactComponent } from './contact/contact.component';
import { FifthBanerComponent } from './fifth-baner/fifth-baner.component';
import { FooterComponent } from './footer/footer.component';
import { PricesService } from './service/prices.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ServicesComponent,
    BanerComponent,
    PortfolioComponent,
    SecoundBanerComponent,
    PriceComponent,
    QuoteComponent,
    ThirdBanerComponent,
    AboutUsComponent,
    OurSkillsComponent,
    FourthBanerComponent,
    ContactComponent,
    FifthBanerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PricesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
