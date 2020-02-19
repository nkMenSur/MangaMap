import { Manga } from '../enums/Manga';
import { IManga } from './IManga';

export interface IMangaList {
  manga: IManga[];
  end: string;
  page: string;
  start: string;
  total: string;
}
