import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../utils/colors';
import {Dummy1} from '../../assets/dummy';

const ChatItemOther = () => {
  return (
    <View style={styles.container}>
      <Image source={Dummy1} style={styles.avatar} />
      <View>
        <View style={styles.chatcontent}>
          <Text style={styles.text}>
            {' '}
            Ibu Docker, Apakah makan jeruk tiap hari baik ?
          </Text>
        </View>
        <Text style={styles.date}>4.20 PM</Text>
      </View>
    </View>
  );
};

export default ChatItemOther;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    color: colors.white,
  },
  chatcontent: {
    maxWidth: '80%',
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.cardGrey,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  date: {
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
    color: colors.text.secondary,
    marginTop: 8,
  },
});
