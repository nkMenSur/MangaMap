import { Component, OnInit } from '@angular/core';
import { IMangaDetails } from 'src/app/SharedModule/interfaces/IMangaDetails';
import { IMAGE } from 'src/app/SharedModule/endpoints/endpoints';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from 'src/app/services/manga/manga.service';

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
