import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
