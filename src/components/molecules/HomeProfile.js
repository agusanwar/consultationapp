import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IlNullPhoto} from '../../assets';
import {getData} from '../../utils';
import {colors} from '../../utils/colors';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    photo: IlNullPhoto,
    fullName: '',
    profesi: '',
  });
  useEffect(() => {
    getData('user').then(res => {
      // console.log('data user: ', res);
      const data = res;
      data.photo = {uri: res.photo};
      // console.log('new profile: ', data);
      setProfile(res);
    });
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession}>{profile.profesi}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Image source={profile.photo} style={styles.avatar} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginLeft: 240,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: colors.text.primary,
    marginRight: 12,
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
