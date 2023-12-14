import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Genre} from '../../../domain/entities/Genre';

type GenreItemType = {
  genre: Genre;
  onPress?: (genre: Genre) => void;
};

const GenreItem = (props: GenreItemType) => {
  const {genre, onPress} = props;
  return (
    <TouchableOpacity
      onPress={() => onPress && onPress(genre)}
      style={styles.genreItem}>
      <Text>{genre.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  genreItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#d6d6d6',
  },
});

export default GenreItem;
