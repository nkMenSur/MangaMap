import { Component, OnInit } from '@angular/core';
import { IMangaList } from 'src/app/SharedModule/interfaces/IMangaList';
import { IManga } from 'src/app/SharedModule/interfaces/IManga';
import { Manga } from 'src/app/SharedModule/enums/Manga';
import { IMAGE } from 'src/app/SharedModule/endpoints/endpoints';
import { MangaService } from 'src/app/services/manga/manga.service';
@Component({
  selector: 'app-topX',
  templateUrl: './topX.component.html',
  styleUrls: ['./topX.component.scss']
})
export class TopXComponent implements OnInit {
  Emanga = Manga;
  ImageCdnUrl = IMAGE;
  mangalist: IMangaList;
  mangas: IManga[];
  top12: IManga[];

  constructor(private ms: MangaService) { }

  async ngOnInit() {
    this.mangalist = await this.ms.getMangaList();
    this.mangas = [...this.mangalist.manga];
    this.top12 = this.mangas.sort((a, b) => b[Manga.Hits] - a[Manga.Hits]).slice(0, 30);
  }
}
