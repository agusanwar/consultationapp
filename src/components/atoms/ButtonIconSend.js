import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {IcSendDark, IcSendLight} from '../../assets';
import {colors} from '../../utils/colors';

const ButtonIconSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <IcSendDark />}
      {!disable && <IcSendLight />}
    </View>
  );
};

export default ButtonIconSend;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingRight: 3,
    paddingTop: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
