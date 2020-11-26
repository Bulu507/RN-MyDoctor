import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

import {ILCatUmum} from '../../../assets';
import React from 'react';

export default function DoctorCategory() {
  return (
    <View style={styles.container}>
      <ILCatUmum style={styles.ilustration} />
      <Text style={styles.label}>Saya Butuh</Text>
      <Text style={styles.category}>Dokter Umum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  ilustration: {marginBottom: 28},
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
