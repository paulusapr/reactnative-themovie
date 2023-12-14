import {Movie} from '../../domain/entities/Movie';
import {MovieDto} from '../models/MovieDto';
import {TMDB_ASSET_URL} from '@env';

export const mapMovieFromApi = (dto: MovieDto): Movie => {
  return {
    id: dto.id,
    title: dto.original_title,
    description: dto.overview,
    thumbnail: `${TMDB_ASSET_URL}${dto.poster_path}`,
  };
};
