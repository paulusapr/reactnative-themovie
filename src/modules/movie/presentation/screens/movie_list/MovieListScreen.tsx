import React, {useEffect} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  ListRenderItemInfo,
  ScrollView,
} from 'react-native';
import Movie from '../../../domain/entities/Movie';
import ListItem from '../../common/components/ListItem';
import Header from '../../common/components/Header';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../core/presentation/store/hook';
import {movieThunk} from '../../store/movie_slice';
import css from '../../styles';
import {RootStackScreenProps} from '../../../../core/presentation/navigation/types';

const MovieListScreen = ({
  navigation,
  route,
}: RootStackScreenProps<'Movie'>) => {
  const genre = route.params.genre;
  const {title} = genre;
  const dispatch = useAppDispatch();
  const {movies} = useAppSelector(state => state.movie);

  useEffect(() => {
    dispatch(movieThunk.getMovieByGenreThunk(genre));
  }, [dispatch, genre]);

  return (
    <View style={css.screen}>
      <Header
        onPress={() => navigation.pop(1)}
        prefix={title}
        suffix="Movies"
      />
      <ScrollView>
        <FlatList
          contentContainerStyle={styles.movieList}
          data={movies[genre.id]}
          renderItem={({item}: ListRenderItemInfo<Movie>) => {
            return (
              <ListItem
                onPress={(movie: Movie) => {
                  navigation.push('MovieDetail', {id: movie.id});
                }}
                movie={item}
              />
            );
          }}
          keyExtractor={(item: Movie) => item.id.toString()}
          horizontal
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  movieList: {
    gap: 5,
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1,
  },
});

export default MovieListScreen;
