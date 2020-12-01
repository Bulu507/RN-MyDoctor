import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';

import {List} from '../../components';

export default function Messages({navigation}) {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor1,
      name: 'Dr. Tammy',
      desc: 'Terimakasih, sehat selalu',
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'Dr. Robby',
      desc: 'Terimakasih, sehat selalu',
    },
    {
      id: 3,
      profile: DummyDoctor3,
      name: 'Dr. Mufti',
      desc: 'Terimakasih, sehat selalu',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((doctor) => {
          return (
            <List
              key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
