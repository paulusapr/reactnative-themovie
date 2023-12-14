import {Movie} from '../../domain/entities/Movie';
import MovieRepository from '../../domain/repositories/MovieRepository';
import {GetMovieByIdUseCase} from '../../domain/usecases/GetMovieByIdUseCase';

export const getMovieByIdUseCase: GetMovieByIdUseCase =
  (movieRepository: MovieRepository) =>
  async (id: number): Promise<Movie> => {
    const movie = await movieRepository.getMovieById(id);
    return movie;
  };
