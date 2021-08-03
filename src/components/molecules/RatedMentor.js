import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {IcStart} from '../../assets';
import {colors} from '../../utils/colors';
import {Gap} from '../atoms';

const RatedMentor = ({pic, name, categoty, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={pic} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Gap height={5} />
        <Text style={styles.categoty}>{categoty}</Text>
      </View>
      <View style={styles.rate}>
        <IcStart />
        <IcStart />
        <IcStart />
        <IcStart />
        <IcStart />
      </View>
    </TouchableOpacity>
  );
};

export default RatedMentor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginTop: 10,
  },
  profile: {
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 25,
  },
  name: {
    fontSize: 18,
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
    marginRight: 12,
    color: colors.text.primary,
  },
  categoty: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    marginRight: 2,
    color: colors.text.secondary,
  },
  rate: {
    flexDirection: 'row',
    marginTop: 5,
  },
});
