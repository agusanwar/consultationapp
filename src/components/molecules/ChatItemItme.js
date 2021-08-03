import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/colors';

const ChatItemItme = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatcontent}>
        <Text style={styles.text}>
          {' '}
          Ibu Docker, Apakah makan jeruk tiap hari baik ?
        </Text>
      </View>
      <Text style={styles.date}>4.20 PM</Text>
    </View>
  );
};

export default ChatItemItme;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    color: colors.text.primary,
  },
  chatcontent: {
    maxWidth: '70%',
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.cardBlue,
    borderRadius: 20,
    borderBottomRightRadius: 0,
  },
  date: {
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
    color: colors.text.secondary,
    marginTop: 8,
  },
});
