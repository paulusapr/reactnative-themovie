import {getMovieGenresUseCase} from '../../application/usecases/get_movie_genres_use_case';
import {movieRepository} from '../repositories/MovieRepository';

export const getMovieGenresUseCaseResolved =
  getMovieGenresUseCase(movieRepository);
