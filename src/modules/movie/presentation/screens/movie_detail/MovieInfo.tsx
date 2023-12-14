import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Movie from '../../../domain/entities/Movie';

const MovieInfo = (props: Movie) => {
  const {thumbnail, title} = props;

  return (
    <View style={styles.info}>
      <Image
        style={styles.thumbnail}
        resizeMode="contain"
        source={{uri: thumbnail}}
      />
      <View style={styles.detail}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    gap: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  detail: {
    flex: 1,
    flexDirection: 'column',
  },
  thumbnail: {
    width: 100,
    height: 150,
    borderRadius: 10,
    objectFit: 'cover',
    borderWidth: 1,
    borderColor: '#d6d6d6',
  },
});

export default MovieInfo;
