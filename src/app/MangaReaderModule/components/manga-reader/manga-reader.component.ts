import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from 'src/app/services/manga/manga.service';

@Component({
  selector: 'app-manga-reader',
  templateUrl: './manga-reader.component.html',
  styleUrls: ['./manga-reader.component.scss']
})
export class MangaReaderComponent {
  currentChapterId;
  currentMangaId;
  currentChapterImages: [];

  @ViewChildren('section') sections: QueryList<ElementRef>;

  constructor(private route: ActivatedRoute, private ms: MangaService) { };

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.currentChapterId = params['chapterId']
      this.currentMangaId = params['mangaId']
    })
  }
}
