
import { MangaOverView } from '../enums/mangaOverview';

export interface IManga {
  [MangaOverView.Image]: string;
  [MangaOverView.Title]: string;
  [MangaOverView.ID]: string;
  [MangaOverView.Alias]: string;
  [MangaOverView.Status]: number;
  [MangaOverView.Category]: string[];
  [MangaOverView.LastChapterDate]: number;
  [MangaOverView.Hits]: number;
}
