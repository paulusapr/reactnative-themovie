import {Genre} from '../entities/Genre';
import {Movie} from '../entities/Movie';
import MovieRepository from '../repositories/MovieRepository';

export type GetMoviesByGenreUseCase = (
  movieRepository: MovieRepository,
) => (genre: Genre) => Promise<Movie[]>;
