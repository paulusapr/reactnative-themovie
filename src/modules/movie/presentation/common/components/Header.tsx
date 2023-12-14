import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import css from '../../styles';

type HeaderType = {
  onPress?: () => void;
  prefix?: string;
  suffix?: string;
};

const Header = (props: HeaderType) => {
  const {onPress, prefix, suffix} = props;

  return (
    <View>
      {onPress && (
        <View style={styles.header}>
          <TouchableOpacity onPress={onPress}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      )}
      {prefix && (
        <View style={css.header}>
          <Text style={css.headerText}>
            {prefix} {suffix}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
  },
});

export default Header;
