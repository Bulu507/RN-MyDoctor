import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {StyleSheet, View} from 'react-native';

import React from 'react';
import {colors} from '../../utils';

export default function DoctorProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile name="Dr. Dolite" desc="Dokter Hewan" />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value="Universitas Sebelas Maret, 2020" />
      <ProfileItem label="Tempat Praktik" value="RS. Siloam Hospital" />
      <ProfileItem label="No. Str" value="00001231133112231" />
      <Gap height={23} />
      <View style={styles.action}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  action: {paddingHorizontal: 40, paddingTop: 23},
});
