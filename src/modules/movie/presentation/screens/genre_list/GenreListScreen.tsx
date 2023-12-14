import React, {useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  View,
  ScrollView,
} from 'react-native';
import GenreItem from '../../common/components/GenreItem';
import {Genre} from '../../../domain/entities/Genre';
import Header from '../../common/components/Header';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../core/presentation/store/hook';
import {movieThunk} from '../../store/movie_slice';
import css from '../../styles';
import {RootStackScreenProps} from '../../../../core/presentation/navigation/types';

const GenreListScreen = ({navigation}: RootStackScreenProps<'Genre'>) => {
  const dispatch = useAppDispatch();
  const {genres} = useAppSelector(state => state.movie);

  useEffect(() => {
    dispatch(movieThunk.getMovieGenresThunk());
  }, [dispatch]);

  return (
    <View style={css.screen}>
      <Header prefix="Select" suffix="Genre" />
      <ScrollView>
        <FlatList
          contentContainerStyle={styles.genreList}
          data={genres}
          renderItem={({item}: ListRenderItemInfo<Genre>) => {
            return (
              <GenreItem
                onPress={(genre: Genre) => {
                  navigation.push('Movie', {genre});
                }}
                genre={item}
              />
            );
          }}
          keyExtractor={(item: Genre) => item.id.toString()}
          horizontal
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  genreList: {
    gap: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '100%',
  },
});

export default GenreListScreen;
