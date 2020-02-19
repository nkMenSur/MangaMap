import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { MangaReaderComponent } from './components/manga-reader/manga-reader.component';


const routes: Routes = [
  {
    path: "",
    component: MangaReaderComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MangaReaderRoutingModule { }
