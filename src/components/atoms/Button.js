import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#6599FF', '#0000FF', '#6599FF']}
          style={styles.linearGradient}>
          <Text style={styles.text}>{title}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  linearGradient: {
    height: 40,
    width: 120,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  text: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: 'white',
    textAlign: 'center',
  },
});
