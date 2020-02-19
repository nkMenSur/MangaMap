import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { TopXComponent } from './components/topX/topX.component';

const routes: Routes = [
  {
    path: "",
    component: TopXComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TopXRoutingModule { }
