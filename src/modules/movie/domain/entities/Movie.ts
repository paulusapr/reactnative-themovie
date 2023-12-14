import {Genre} from './Genre';

export type Movie = {
  id: number;
  title: string;
  description: string;
  genres?: Genre[];
  thumbnail: string;
};

export default Movie;
