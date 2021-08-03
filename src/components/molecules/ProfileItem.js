import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/colors';

const ProfileItem = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}> {value}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  label: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: colors.text.secondary,
    marginBottom: 8,
  },

  value: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: colors.text.primary,
  },
});
