import { Component, OnInit, Input } from '@angular/core';
import { SwitcherService } from 'src/app/services/chapter-and-image-switcher/switcher.service';
import { IMAGE } from 'src/app/endpoints/endpoints';
import { Chapter } from 'src/app/enums/Chapter';
import { IChapterDto } from 'src/app/interfaces/IChapterDto';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'appChapterImageSwitcher',
  templateUrl: './chapter-image-switcher.component.html',
  styleUrls: ['./chapter-image-switcher.component.scss']
})
export class ChapterImageSwitcherComponent implements OnInit {
  @Input() mangaId;
  @Input() chapterId;

  chapterImgs: HTMLImageElement[] = [];
  loading = true;
  chapterData: IChapterDto;
  previousId: string;
  nextId: string;

  EChapter = Chapter;
  cdnImgRoot = IMAGE;
  navigationSubscription: any;

  constructor(private ss: SwitcherService, private router: Router) { }

  async ngOnInit() {
    this.navigationSubscription = this.router.events.subscribe(
      async (e: any) => {
        // If it is a NavigationEnd event re-initalise the component
        if (e instanceof NavigationEnd) {
          await this.InitNewMangaData();
        }
      });

    this.InitNewMangaData();
  }

  async next() {
    this.loading = true;
    this.chapterId = this.nextId;
    this.router.navigateByUrl(`/reader/${this.nextId}/${this.mangaId}`);
  }

  async previous() {
    this.loading = true;
    this.chapterId = this.previousId;
    this.router.navigateByUrl(`/reader/${this.previousId}/${this.mangaId}`);
  }

  async InitNewMangaData() {
    this.chapterData = await this.ss.getChapterByIdsInOrder(
      this.mangaId, this.chapterId
    );

    if (this.chapterData.chapter.length) {
      this.loading = false;
    }

    this.previousId = await this.ss.getPreviousChapterId(
      this.mangaId, this.chapterData.chapterIndex
    );

    this.nextId = await this.ss.getNextChapterId(
      this.mangaId, this.chapterData.chapterIndex
    );
    const imgUrls = this.chapterData.chapter.map(x => this.cdnImgRoot + x[1]);
    this.pload(imgUrls);
  }

  // TODO: image preload handleing one after another like in mangastorm
  pload(imgArray: any[]): void {
    for (var i = 0; i < imgArray.length; i++) {
      const img = new Image();
      this.chapterImgs.push(img);
      this.chapterImgs[i].src = imgArray[i];

      console.log('loaded: ' + imgArray[i]);
    }
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}



