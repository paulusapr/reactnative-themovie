import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../common/components/Header';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../core/presentation/store/hook';
import {movieThunk} from '../../store/movie_slice';
import MovieInfo from './MovieInfo';
import MovieDetail from './MovieDetail';
import css from '../../styles';
import {RootStackScreenProps} from '../../../../core/presentation/navigation/types';

const MovieDetailScreen = ({
  navigation,
  route,
}: RootStackScreenProps<'MovieDetail'>) => {
  const {id} = route.params;
  const dispatch = useAppDispatch();
  const {selectedMovie} = useAppSelector(state => state.movie);

  useEffect(() => {
    dispatch(movieThunk.getMovieByIdThunk(id));
  }, [dispatch, id]);

  return (
    <View style={css.screen}>
      <Header onPress={() => navigation.pop(1)} />
      {selectedMovie && (
        <View style={styles.content}>
          <MovieInfo {...selectedMovie} />
          <MovieDetail {...selectedMovie} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
  },
});

export default MovieDetailScreen;
