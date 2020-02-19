import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMangaList } from 'src/app/interfaces/IMangaList';
import { MANGA_LIST, MANGA, CHAPTER } from 'src/app/endpoints/endpoints';
import { Language } from 'src/app/enums/Language';
import { IMangaDetails } from 'src/app/interfaces/IMangaDetails';
import { Manga } from 'src/app/enums/Manga';


@Injectable({
  providedIn: 'root'
})

export class MangaService {
  private mangalist: IMangaList;

  constructor(private http: HttpClient) { }

  async getMangaList(): Promise<IMangaList> {
    if (!this.mangalist) {
      this.mangalist = await this.http.get<IMangaList>(`${MANGA_LIST}${Language.English}`).toPromise();
    }
    return this.mangalist;
  }

  async getMangaDetails(mangaId: string): Promise<IMangaDetails> {
    if (!this.mangalist) {
      await this.getMangaList();
    }

    const matchingManga = this.mangalist.manga.find(x => x[Manga.ID] === mangaId);

    if (matchingManga.Details) {
      console.log('manga from cache')

      return matchingManga.Details;
    }

    const mangaDetailsFromApi = await this.http.get<IMangaDetails>(`${MANGA}${mangaId}`).toPromise();

    matchingManga.Details = mangaDetailsFromApi;
    console.log('mangaFromApi')

    return mangaDetailsFromApi as IMangaDetails;
  }

  async getChapter(chapterId: string) {
    console.log(this.mangalist);
    // debugger
    return this.http.get(`${CHAPTER}${chapterId}`).toPromise();
  }
}
