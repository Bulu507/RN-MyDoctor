import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function Input({label}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 10,
    padding: 12,
  },
  label: {
    fontSize: 16,
    color: '#7D8797',
    marginBottom: 6,
    fontFamily: 'Nunito-Regular',
  },
});
