import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

import React from 'react';

export default function Link({title, size, align}) {
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: colors.text.secondary,
    fontFamily: fonts.primary[600],
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
