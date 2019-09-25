import { MangaDetail } from '../enums/mangaDetail';

export interface IMangaDetail {
  [MangaDetail.Aka]: string[];
  [MangaDetail.AkaAlias]: string[];
  [MangaDetail.Alias]: string;
  [MangaDetail.Artist]: string;
  [MangaDetail.ArtistKW]: string[];
  [MangaDetail.Author]: string;
  [MangaDetail.AuthorKW]: string[];
  [MangaDetail.AutoManga]: boolean;
  [MangaDetail.Baka]: boolean;
  [MangaDetail.Categories]: string[];
  [MangaDetail.Chapters]: [number, number, string, string];
  [MangaDetail.ChapterLength]: number;
  [MangaDetail.Created]: number;
  [MangaDetail.Description]: string;
  [MangaDetail.Hits]: number;
  [MangaDetail.Image]: string;
  [MangaDetail.ImageUrl]: string;
  [MangaDetail.Language]: number;
  [MangaDetail.LastChapterDate]: number;
  [MangaDetail.Released]: number;
  [MangaDetail.StartsWith]: string;
  [MangaDetail.Status]: number;
  [MangaDetail.Title]: string;
  [MangaDetail.TitleKW]: string[];
  [MangaDetail.Type]: number;
  [MangaDetail.UpdatedKeywords]: boolean;
  [MangaDetail.Origin]: string;
}
