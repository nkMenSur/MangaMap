import { NgModule } from '@angular/core';
import { MangaReaderRoutingModule } from './mangareader.routing.module';
import { MangaReaderComponent } from './components/manga-reader/manga-reader.component';
import { SharedModule } from '../SharedModule/shared.module';
import { CommonModule } from '@angular/common';
import { ChapterImageSwitcherComponent } from './components/chapter-image-switcher/chapter-image-switcher.component';


@NgModule({
  declarations: [MangaReaderComponent, ChapterImageSwitcherComponent],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    MangaReaderRoutingModule
  ]
})

export class MangareaderModule { }
