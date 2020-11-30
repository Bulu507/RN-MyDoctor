import {Header, ListDoctor} from '../../components';
import {StyleSheet, View} from 'react-native';

import {DummyDoctor1} from '../../assets';
import React from 'react';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor1}
        name="Dr. Tammy Aulia"
        desc="wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor1}
        name="Dr. Tammy Aulia"
        desc="wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor1}
        name="Dr. Tammy Aulia"
        desc="wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor1}
        name="Dr. Tammy Aulia"
        desc="wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor1}
        name="Dr. Tammy Aulia"
        desc="wanita"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
