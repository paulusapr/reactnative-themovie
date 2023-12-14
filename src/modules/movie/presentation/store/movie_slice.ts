import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getMovieByIdUseCaseResolved} from '../../infrastructure/usecases/get_movie_by_id_use_case_resolved';
import {getMoviesByGenreUseCaseResolved} from '../../infrastructure/usecases/get_movies_by_genre_use_case_resolved';
import {Movie} from '../../domain/entities/Movie';
import {RootState} from '../../../core/presentation/store';
import {Genre} from '../../domain/entities/Genre';
import {getMovieGenresUseCaseResolved} from '../../infrastructure/usecases/get_movie_genres_use_case_resolved';

interface MovieStateProps {
  genres: Genre[];
  movies: Record<number, Movie[]>;
  selectedMovie: Movie | null;
  isLoading: boolean;
  message?: string;
}

export const getMovieGenresThunk = createAsyncThunk<
  Genre[],
  void,
  {
    state: RootState;
  }
>('movie/genres', async () => {
  try {
    return await getMovieGenresUseCaseResolved();
  } catch (error) {
    // TODO: Handle this
    throw new Error('Failed to fetch user data by ID');
  }
});

export const getMovieByIdThunk = createAsyncThunk<
  Movie,
  number,
  {
    state: RootState;
  }
>('movie/getById', async (id: number) => {
  try {
    return await getMovieByIdUseCaseResolved(id);
  } catch (error) {
    // TODO: Handle this
    throw new Error('Failed to fetch user data by ID');
  }
});

export const getMovieByGenreThunk = createAsyncThunk<
  Movie[],
  Genre,
  {
    state: RootState;
  }
>('movie/getByGenre', async (genre: Genre) => {
  try {
    return await getMoviesByGenreUseCaseResolved(genre);
  } catch (error) {
    // TODO: Handle this
    throw new Error('Failed to fetch user data by ID');
  }
});

const initialState: MovieStateProps = {
  genres: [],
  movies: [],
  selectedMovie: null,
  isLoading: false,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    // Get movie genres
    builder
      .addCase(getMovieGenresThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMovieGenresThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.genres = action.payload;
      })
      .addCase(getMovieGenresThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error.message;
      });

    // Get movie by id
    builder
      .addCase(getMovieByIdThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMovieByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedMovie = action.payload;
      })
      .addCase(getMovieByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error.message;
      });

    // Get movie by id
    builder
      .addCase(getMovieByGenreThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMovieByGenreThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies[action.meta.arg.id] = action.payload;
      })
      .addCase(getMovieByGenreThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error.message;
      });
  },
});

export const movieThunk = {
  getMovieGenresThunk,
  getMovieByIdThunk,
  getMovieByGenreThunk,
};
export const movieActions = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
