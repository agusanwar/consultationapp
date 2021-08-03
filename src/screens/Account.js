import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlNullPhoto} from '../assets';
import {Header, Gap, List, Profile} from '../components';
import {getData} from '../utils';
import {colors} from '../utils/colors';
import {Fire} from '../config';
import {showMessage} from 'react-native-flash-message';

const Account = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profesi: '',
    photo: IlNullPhoto,
  });
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        // console.log('Success SignOut: ');
        navigation.replace('GetStarted');
      })
      .catch(err => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };
  return (
    <View style={styles.page}>
      <Header title=" Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile
          name={profile.fullName}
          desc={profile.profesi}
          photo={profile.photo}
        />
      )}

      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Edit Your My-Profile"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Language"
        desc="Setting Language"
        type="next"
        icon="language"
      />
      <List
        name="Help Center"
        desc="My Customer Service"
        type="next"
        icon="help"
      />
      <List
        name="Exit"
        desc="Close My-app"
        type="next"
        icon="rate"
        onPress={signOut}
      />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
