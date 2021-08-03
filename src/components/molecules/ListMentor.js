import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../utils/colors';

const ListMentor = ({profile, name, desc, type, onPress, icon}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListMentor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: colors.text.tertiary,
  },
});
