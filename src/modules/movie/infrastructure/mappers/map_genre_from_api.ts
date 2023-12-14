import {Genre} from '../../domain/entities/Genre';
import {GenreDto} from '../models/MovieDetailDto';

export const mapGenreFromApi = (dto: GenreDto): Genre => {
  return {
    id: dto.id,
    title: dto.name,
  };
};
