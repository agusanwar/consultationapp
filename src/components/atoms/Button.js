import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/colors';
import {ButtonIconOnly, ButtonIconSend} from '../atoms';
// import {ButtonIconOnly, ButtonIconSend} from '.'; //Warning

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'btn-icon-send') {
    return <ButtonIconSend disable={disable} />;
  }
  
  if (type === 'icon-only') {
    return <ButtonIconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.containter(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  disableBg: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    backgroundColor: colors.button.disable.background,
  },

  disableText: {
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: colors.button.disable.text,
  },
  containter: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  }),

  text: type => ({
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
