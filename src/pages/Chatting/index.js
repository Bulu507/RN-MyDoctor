import {ChatItem, Header, InputChat} from '../../components';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, colors} from '../../utils';

import React from 'react';

export default function Chatting({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title="Dr. Tammy Aulia"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 30 November, 2020</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <InputChat />
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
