import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyAnwar, IcRemovePhoto} from '../../assets';
import {colors} from '../../utils/colors';

const Profile = ({name, desc, isRemove, photo, onPress}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profesi: '',
  });
  return (
    <View style={styles.container}>
      {!isRemove && (
        <View style={styles.borderprofile}>
          <Image source={photo} style={styles.avatar} />
          {isRemove && <IcRemovePhoto style={styles.photo} />}
        </View>
      )}
      {isRemove && (
        <TouchableOpacity style={styles.borderprofile} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
          {isRemove && <IcRemovePhoto style={styles.photo} />}
        </TouchableOpacity>
      )}
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profesi}> {desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  borderprofile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.borderProfile,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  profesi: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  photo: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});
