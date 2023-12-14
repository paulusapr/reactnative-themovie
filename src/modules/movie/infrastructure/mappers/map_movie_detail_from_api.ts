import {Movie} from '../../domain/entities/Movie';
import {MovieDetailDto} from '../models/MovieDetailDto';
import {mapGenreFromApi} from './map_genre_from_api';
import {TMDB_ASSET_URL} from '@env';

export const mapMovieDetailFromApi = (dto: MovieDetailDto): Movie => {
  return {
    id: dto.id,
    title: dto.original_title,
    description: dto.overview,
    genres: dto.genres.map(mapGenreFromApi),
    thumbnail: `${TMDB_ASSET_URL}${dto.poster_path}`,
  };
};
