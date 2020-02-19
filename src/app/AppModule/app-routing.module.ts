import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("../HomeModule/home.module").then(m => m.HomeModule)
  },
  {
    path: "top30",
    loadChildren: () => import('../TopXModule/topX.module').then(m => m.TopXModule)
  },
  {
    path: "reader/:chapterId/:mangaId",
    loadChildren: () => import('../MangaReaderModule/mangareader.module').then(m => m.MangareaderModule),
  },
  {
    path: "details/:mangaId",
    loadChildren: () => import('../MangaDetails/manga-details.module').then(m => m.MangaDetailsModule)
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
