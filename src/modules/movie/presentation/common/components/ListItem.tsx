import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Movie from '../../../domain/entities/Movie';

type ListItemType = {
  movie: Movie;
  onPress?: (movie: Movie) => void;
};

const ListItem = (props: ListItemType) => {
  const {movie, onPress} = props;

  return (
    <TouchableOpacity
      onPress={() => onPress && onPress(movie)}
      style={styles.content}>
      <View style={styles.display}>
        <Image
          style={styles.thumbnail}
          resizeMode="contain"
          source={{uri: movie.thumbnail}}
        />
      </View>
      <View style={styles.description}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.subTitle} numberOfLines={4}>
          {movie.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 20,
    height: 125,
  },
  display: {
    height: 125,
    borderRightWidth: 1,
    borderColor: '#d6d6d6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    fontWeight: '300',
  },
  thumbnail: {
    width: 100,
    height: 125,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    objectFit: 'cover',
  },
});

export default ListItem;
