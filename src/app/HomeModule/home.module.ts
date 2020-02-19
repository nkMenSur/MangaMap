import { NgModule } from '@angular/core';
import { SharedModule } from '../SharedModule/shared.module';
import { HomeRoutingModule } from './home.routing.module'
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CardsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  imports: [SharedModule, HomeRoutingModule, CardsModule],
  providers: [],
})
export class HomeModule { }
