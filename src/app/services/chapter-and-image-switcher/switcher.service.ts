import { Injectable } from '@angular/core';
import { MangaService } from '../manga/manga.service';
import { IChapterDto } from 'src/app/interfaces/IChapterDto';

@Injectable({
  providedIn: 'root'
})
export class SwitcherService {
  constructor(private ms: MangaService) { }

  async getChapterByIdsInOrder(mangaId: string, chapterId: string) {
    const details = await this.ms.getMangaDetails(mangaId);
    const chapterIdFromDetails = details.chapters
      .find(x => x[3] === chapterId) as string;

    const chapterIndex = parseInt(
      details.chapters.indexOf(chapterIdFromDetails) as unknown as string
    );

    const currentChapterId = chapterIdFromDetails[3];
    const chapterFromApi = await this.ms.getChapter(currentChapterId);

    return chapterFromApi ? {
      chapter: [...chapterFromApi['images'].reverse()],
      chapterIndex
    } as IChapterDto : null;
  }

  async getNextChapterId(mangaId: string, currentChapterIndex: number) {
    const details = await this.ms.getMangaDetails(mangaId);
    const chapterIndex = --currentChapterIndex;

    if (!this.isNextChapterAvailable(chapterIndex)) {
      return null;
    }

    const desiredChapterId = details.chapters[chapterIndex][3] as string;


    return desiredChapterId;
  }

  async getPreviousChapterId(mangaId: string, currentChapterIndex: number) {
    const details = await this.ms.getMangaDetails(mangaId);
    const chapterIndex = ++currentChapterIndex;

    if (!(await this.isPreviousChapterAvailable(mangaId, chapterIndex))) {
      return null;
    }
    const desiredChapterId = details.chapters[chapterIndex][3] as string;

    return desiredChapterId;
  }

  isNextChapterAvailable(chapterIndex: number) {
    return chapterIndex >= 0
  }

  async isPreviousChapterAvailable(
    mangaId: string, currentChapterIndex: number
  ) {
    const details = await this.ms.getMangaDetails(mangaId);
    return (details.chapters.length - 1) > currentChapterIndex
  }
}
