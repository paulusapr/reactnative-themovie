import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type MovieDetailNavigationProps = {
  menus: string[];
  active: string;
  onPress: (name: string) => void;
};

const MovieDetailNavigation = (props: MovieDetailNavigationProps) => {
  const {menus, active, onPress} = props;

  return (
    <View style={styles.nav}>
      {menus.map((name: string) => (
        <TouchableOpacity
          key={name}
          style={
            active === name ? {...styles.menu, ...styles.active} : styles.menu
          }
          onPress={() => onPress(name)}>
          <Text
            style={
              active === name
                ? {...styles.text, ...styles.textActive}
                : styles.text
            }>
            {name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    gap: 20,
    borderBottomWidth: 1,
    borderColor: '#d6d6d6',
  },
  menu: {
    flex: 1,
    paddingVertical: 10,
  },
  text: {
    textAlign: 'center',
  },
  textActive: {
    fontWeight: 'bold',
  },
  active: {
    borderBottomWidth: 2,
    borderColor: '#d6d6d6',
  },
});

export default MovieDetailNavigation;
