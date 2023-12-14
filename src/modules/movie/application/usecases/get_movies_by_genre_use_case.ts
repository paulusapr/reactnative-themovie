import {Genre} from '../../domain/entities/Genre';
import {Movie} from '../../domain/entities/Movie';
import MovieRepository from '../../domain/repositories/MovieRepository';
import {GetMoviesByGenreUseCase} from '../../domain/usecases/GetMoviesByGenreUseCase';

export const getMoviesByGenreUseCase: GetMoviesByGenreUseCase =
  (movieRepository: MovieRepository) =>
  async (genre: Genre): Promise<Movie[]> => {
    const movies = await movieRepository.getMoviesByGenre(genre);
    return movies;
  };
