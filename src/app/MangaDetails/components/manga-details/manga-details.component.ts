import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from 'src/app/services/manga/manga.service';
import { IMangaDetails } from 'src/app/interfaces/IMangaDetails';
import { IMAGE } from 'src/app/endpoints/endpoints';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss']
})
export class MangaDetailsComponent implements OnInit {

  currentMangaId;
  currentManga: IMangaDetails;
  mangaNotFound = false;
  cdnImageRootUrl = IMAGE;

  constructor(private route: ActivatedRoute, private ms: MangaService) { }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.currentMangaId = params['mangaId']
      if (this.currentMangaId) {
        this.currentManga = await this.ms.getMangaDetails(this.currentMangaId);
      }
      if (!this.currentMangaId || !this.currentManga) {
        this.mangaNotFound = true;
      }
    })
  }
}
