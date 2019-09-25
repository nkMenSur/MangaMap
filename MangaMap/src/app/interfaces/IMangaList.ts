import { IManga } from './IManga';

export interface IMangaList {
  manga: IManga[];
  start: number;
  end: number;
  page: number;
  total: number;
}
