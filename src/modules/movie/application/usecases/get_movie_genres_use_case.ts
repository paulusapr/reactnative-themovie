import {Genre} from '../../domain/entities/Genre';
import MovieRepository from '../../domain/repositories/MovieRepository';
import {GetMovieGenresUseCase} from '../../domain/usecases/GetMovieGenresUseCase';

export const getMovieGenresUseCase: GetMovieGenresUseCase =
  (movieRepository: MovieRepository) => async (): Promise<Genre[]> => {
    const genres = await movieRepository.getMovieGenres();
    return genres;
  };
