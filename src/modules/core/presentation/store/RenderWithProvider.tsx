import {configureStore, combineReducers} from '@reduxjs/toolkit';
import type {RenderOptions} from '@testing-library/react';
import {render} from '@testing-library/react';
import React from 'react';
import {Provider} from 'react-redux';
import {movieReducer} from '../../../movie/presentation/store/movie_slice';
import {MovieStateProps} from '../../../movie/presentation/store/movie_slice';

const rootReducer = combineReducers({
  reducer: {
    movie: movieReducer,
  },
});

export const setupStore = (preloadedState?: Partial<typeof movieReducer>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof movieReducer>;

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: MovieStateProps;
  store?: AppStore;
}

function RenderWithProvider(
  Element: JSX.Element,
  {
    preloadedState = {
      genres: [],
      movies: [],
      selectedMovie: null,
      isLoading: false,
    },
    store = configureStore({reducer: movieReducer, preloadedState}),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({children}: {children: JSX.Element}) {
    return <Provider store={store}>{children}</Provider>;
  }
  return {store, ...render(Element, {wrapper: Wrapper, ...renderOptions})};
}

export default RenderWithProvider;
