import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangaDetailsComponent } from './components/manga-details/manga-details.component';


const routes: Routes = [
  {
    path: "",
    component: MangaDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangaDetailsRoutingModule { }
