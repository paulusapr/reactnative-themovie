import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GenreListScreen from '../../../movie/presentation/screens/genre_list/GenreListScreen';
import MovieDetailScreen from '../../../movie/presentation/screens/movie_detail/MovieDetailScreen';
import MovieListScreen from '../../../movie/presentation/screens/movie_list/MovieListScreen';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const initialRouteName: keyof RootStackParamList = 'Genre';

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Genre" component={GenreListScreen} />
      <Stack.Screen name="Movie" component={MovieListScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
}
