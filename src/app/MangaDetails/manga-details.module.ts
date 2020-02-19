import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaDetailsRoutingModule } from './manga-details-routing.module';
import { SharedModule } from '../SharedModule/shared.module';
import { MangaDetailsComponent } from './components/manga-details/manga-details.component';


@NgModule({
  declarations: [MangaDetailsComponent],
  imports: [
    SharedModule,
    CommonModule,
    MangaDetailsRoutingModule,
  ]
})
export class MangaDetailsModule { }
