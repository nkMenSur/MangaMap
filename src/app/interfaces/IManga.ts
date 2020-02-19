import { IMangaDetails } from './IMangaDetails';


export interface IManga {
  Image: string;
  Title: string
  ID: string;
  Alias: string;
  Status: number;
  Category: string[];
  LastChapterDate: number;
  Hits: number;
  Details: IMangaDetails;
}
