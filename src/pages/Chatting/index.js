import {ChatItem, Header, InputChat} from '../../components';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';

import React from 'react';

export default function Chatting({navigation, route}) {
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title={dataDoctor.data.fullName}
        desc={dataDoctor.data.category}
        photo={dataDoctor.data.photo}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Senin, 30 November, 2020</Text>
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
        </ScrollView>
      </View>
      <InputChat
        value=""
        onChangetext={() => alert('btn click')}
        onButtonPress={() => alert('btn click')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {flex: 1},
  chatDate: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
