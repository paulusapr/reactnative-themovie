import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MovieDetailNavigation from './MovieDetailNavigation';
import Movie from '../../../domain/entities/Movie';

const MovieDetail = (props: Movie) => {
  const {description} = props;
  const [nav, setNav] = useState<string>('Details');

  return (
    <View style={styles.detail}>
      <MovieDetailNavigation
        menus={['Details', 'Reviews']}
        active={nav}
        onPress={(name: string) => setNav(name)}
      />
      {nav === 'Details' ? (
        <Text>{description}</Text>
      ) : (
        <Text>Coming soon...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  detail: {
    flexDirection: 'column',
    gap: 20,
  },
});

export default MovieDetail;
