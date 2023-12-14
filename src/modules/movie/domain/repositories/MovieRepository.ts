import {Genre} from '../entities/Genre';
import {Movie} from '../entities/Movie';

export default interface MovieRepository {
  getMovieById: (id: number) => Promise<Movie>;
  getMoviesByGenre: (genre: Genre) => Promise<Movie[]>;
  getMovieGenres: () => Promise<Genre[]>;
}
