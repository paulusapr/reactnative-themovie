import {GenreDto} from './GenreDto';
import {ProductionCompanyDto} from './ProductionCompanyDto';
import {ProductionCountryDto} from './ProductionCountryDto';
import {SpokenLanguageDto} from './SpokenLanguageDto';

export type MovieDetailDto = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: GenreDto[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: ProductionCompanyDto[];
  production_countries?: ProductionCountryDto[];
  release_date: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguageDto[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type {GenreDto};
