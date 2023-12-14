import {Movie} from '../entities/Movie';
import MovieRepository from '../repositories/MovieRepository';

export type GetMovieByIdUseCase = (
  movieRepository: MovieRepository,
) => (id: number) => Promise<Movie>;
