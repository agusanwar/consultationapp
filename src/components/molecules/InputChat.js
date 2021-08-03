import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button} from '../atoms';
// import {Button} from './Header';
import {colors} from '../../utils/colors';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Aa" />
      <Button type="btn-icon-send" />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.cardGrey,
    color: colors.text.primary,
    padding: 14,
    borderRadius: 20,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    maxHeight: 45,
  },
});
