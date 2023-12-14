import {getMoviesByGenreUseCase} from '../../application/usecases/get_movies_by_genre_use_case';
import {movieRepository} from '../repositories/MovieRepository';

export const getMoviesByGenreUseCaseResolved =
  getMoviesByGenreUseCase(movieRepository);
