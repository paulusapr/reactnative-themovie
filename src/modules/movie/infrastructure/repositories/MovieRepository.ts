import {Genre} from '../../domain/entities/Genre';
import {Movie} from '../../domain/entities/Movie';
import MovieRepository from '../../domain/repositories/MovieRepository';
import {
  discoverMovieGenresApi,
  discoverMoviesApi,
  getMovieDetailApi,
} from '../clients/remote_api';
import {mapGenreFromApi} from '../mappers/map_genre_from_api';
import {mapMovieDetailFromApi} from '../mappers/map_movie_detail_from_api';
import {mapMovieFromApi} from '../mappers/map_movie_from_api';

export const movieRepository: MovieRepository = {
  getMovieById: async function (id: number): Promise<Movie> {
    try {
      const movieDto = await getMovieDetailApi(id);
      return mapMovieDetailFromApi(movieDto);
    } catch (error) {
      // TODO: Handle this
      throw new Error('');
    }
  },
  getMoviesByGenre: async function (genre: Genre): Promise<Movie[]> {
    try {
      const moviesDto = await discoverMoviesApi(genre.id);
      return moviesDto.map(mapMovieFromApi);
    } catch (error) {
      // TODO: Handle this
      throw new Error('');
    }
  },
  getMovieGenres: async function (): Promise<Genre[]> {
    try {
      const genresDto = await discoverMovieGenresApi();
      return genresDto.map(mapGenreFromApi);
    } catch (error) {
      // TODO: Handle this
      throw new Error('');
    }
  },
};
