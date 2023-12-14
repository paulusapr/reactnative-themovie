import axios from 'axios';
import {MovieDto} from '../models/MovieDto';
import {MovieDetailDto} from '../models/MovieDetailDto';
import {GenreDto} from '../models/GenreDto';
import {TMDB_ACCESS_TOKEN, TMDB_BASE_URL} from '@env';
import {DiscoverMovieGenresApiResponse} from '../models/response/DiscoverMovieGenresApiResponse';

const API_VERSION = '3';

const apiClient = axios.create({
  baseURL: `${TMDB_BASE_URL}/${API_VERSION}`,
  headers: {
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
});

export const getMovieDetailApi = async (
  id: number,
): Promise<MovieDetailDto> => {
  const url = `/movie/${id}`;

  try {
    const responseData = (await apiClient.get(url)).data;
    return responseData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // TODO: Handle this
      throw new Error(error.message);
    } else {
      // TODO: Handle this
      throw new Error('Unknown error');
    }
  }
};

export const discoverMoviesApi = async (
  genreId: number,
): Promise<MovieDto[]> => {
  const url = '/discover/movie';

  try {
    const responseData = (
      await apiClient.get(url, {
        params: {
          with_genres: genreId,
        },
      })
    ).data;
    return responseData.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // TODO: Handle this
      throw new Error(error.message);
    } else {
      // TODO: Handle this
      throw new Error('Unknown error');
    }
  }
};

export const discoverMovieGenresApi = async (): Promise<GenreDto[]> => {
  const url = '/genre/movie/list';

  console.log('(API) Discover movie genre started...');
  try {
    const responseData = (
      await apiClient.get<DiscoverMovieGenresApiResponse>(url)
    ).data;
    const genres = responseData.genres;
    console.log(
      `(API) Discover movie genre success! | total data: ${genres.length}`,
    );
    return responseData.genres;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // TODO: Handle this
      console.error(`(API) Discover movie genre error! | ${error.message}`);
      throw new Error(error.message);
    } else {
      // TODO: Handle this
      throw new Error('Unknown error');
    }
  }
};
