import {getMovieByIdUseCase} from '../../application/usecases/get_movie_by_id_use_case';
import {movieRepository} from '../repositories/MovieRepository';

export const getMovieByIdUseCaseResolved = getMovieByIdUseCase(movieRepository);
