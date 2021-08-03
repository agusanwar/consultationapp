import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {colors} from '../../utils/colors';
import Gap from './Gap';

const Input = ({label, value, onChangeText, secureTextEntry, disable}) => {
  //{} = function
  //[] = state
  //(border) menjadi sebuah funtion untuk value text input
  //[ border] = value u/ border colors di StyleSheet

  const [border, setBorder] = useState(colors.border);

  //onfocusform untuk memilih warna pada saat form fokus
  const onFocusform = () => {
    setBorder(colors.tertiary);
  };
  const onBlurFrom = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}> {label}</Text>
      <Gap height={10} />
      <TextInput
        onFocus={onFocusform}
        onBlur={onBlurFrom}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
    color: colors.secondary,
  }),

  label: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 6,
    fontFamily: 'Nunito-Regular',
  },
});
