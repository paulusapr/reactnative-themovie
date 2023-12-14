import {Genre} from '../entities/Genre';
import MovieRepository from '../repositories/MovieRepository';

export type GetMovieGenresUseCase = (
  movieRepository: MovieRepository,
) => () => Promise<Genre[]>;
