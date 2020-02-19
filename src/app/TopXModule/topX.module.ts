import { SharedModule } from 'src/app/SharedModule/shared.module';
import { NgModule } from '@angular/core';
import { CardsModule } from 'angular-bootstrap-md';
import { TopXComponent } from './components/topX/topX.component';
import { TopXRoutingModule } from './topX.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TopXComponent
  ],
  imports: [SharedModule, CardsModule, TopXRoutingModule, CommonModule],
  providers: [],
})

export class TopXModule { }
