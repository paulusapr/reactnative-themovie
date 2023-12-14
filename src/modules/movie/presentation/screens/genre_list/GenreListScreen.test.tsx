/**
 * @format
 */

import 'react-native';
// import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import GenreListScreen from './GenreListScreen';
import RenderWithProvider from '../../../../core/presentation/store/RenderWithProvider';
import store from '../../../../core/presentation/store';
import {Provider} from 'react-redux';

// Note: import explicitly to use the types shipped with jest.
import {describe, test} from '@jest/globals';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// jest.mock('react-redux', () => ({
//   connect: () => jest.fn(),
//   useSelector: jest.fn(fn => fn()),
//   useDispatch: () => jest.fn()
// }));

// it('renders correctly', () => {
//   const actualNav = jest.requireActual('@react-navigation/native');
//   renderer.create(
//     renderWithProvider(
//       <GenreListScreen
//         navigation={actualNav.useNavigation()}
//         route={actualNav.useSelector()}
//       />,
//     ),
//   );
// });

// jest.mock('react-native-dotenv', () => ({
//   TMDB_BASE_URL: 'https://api.themoviedb.org',
//   TMDB_ASSET_URL: 'https://image.tmdb.org/t/p/original',
//   TMDB_ACCESS_TOKEN:
//     'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGYyMjQ2MDVkNzNlMzYxZDczMWRiMjkxOGRiNDNiYSIsInN1YiI6IjY1NzE4ZGYxOTBmY2EzMDE0ZTcxYjhiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NiHpoOhcmSvteumz5y0Pfoq0qnn4nA39_5jCZRy7r_M',
// }));
// jest.mock('./src/modules/movie/infrasctructure/clients/remote_api', () => {
//   return;
// });

describe('Render Genre List', () => {
  // const actualNav = jest.requireActual('@react-navigation/native');
  test('should pass', () => {
    RenderWithProvider(
      <Provider store={store}>
        <GenreListScreen navigation={{} as any} route={{} as any} />
      </Provider>,
    );
  });
});
