import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, InputChat, ChatItem} from '../components';
import {colors} from '../utils/colors';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title="Agus Anwar"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Minggu, 17 Agustus 2020 </Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  chatDate: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: colors.text.primary,
    marginVertical: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
});
