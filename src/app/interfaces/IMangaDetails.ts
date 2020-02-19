import { Language } from '../enums/Language'

export interface IMangaDetails {
  aka: string[];
  "aka-alias": string[];
  alias: string;
  artist: string;
  artist_kw: string[];
  author: string;
  author_kw: string[];
  baka: boolean
  categories: string[]
  chapters: any[];
  chapters_len: number;
  created: number;
  description: string;
  hits: number;
  image: string;
  imageURL: string;
  language: Language
  last_chapter_date: string;
  random: number[];
  released: number;
  startsWith: string;
  status: number;
  title: string;
  title_kw: string[];
  type: string;
  updatedKeywords: boolean;
}
