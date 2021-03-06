import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {colors} from '../../utils';

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={colors.tertiary} />
      <Text style={styles.text}> Loading ... </Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.loadingBackground,
    width: '100%',
    height: '100%',
  },

  text: {
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    marginTop: 16,
    color: colors.white,
  },
});
