import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, ImagePickerIOS} from 'react-native';
import {Header, Profile} from '../molecules';
import {InputText, Button, Gap} from '../atoms';
import {colors} from '../../utils/colors';
import {getData, storeData} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';
import * as ImagePicker from 'react-native-image-picker'; // * as solution
import {launchImageLibrary} from 'react-native-image-picker';
import {IlNullPhoto} from '../../assets';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profesi: '',
    emailAddress: '',
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(IlNullPhoto);
  const [photoForBD, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const update = () => {
    // console.log('profile: ', profile);

    // console.log('new password:', password);

    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password kurang dari 6 karakter',
          type: 'default',
          backgroundColor: colors.error,
          color: 'white',
        });
      } else {
        //update password
        updatePassword();
        updateProfileData();
        navigation.replace('MainApp');
      }
    } else {
      updateProfileData();
      navigation.replace('MainApp');
    }
  };

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged(user => {
      if (user) {
        //update password
        user.updatePassword(password).catch(err => {
          showMessage({
            message: err.message,
            type: 'default',
            backgroundColor: colors.error,
            color: 'white',
          });
        });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForBD;

    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        // console.log('success: ');
        storeData('user:', data);
      })
      .catch(err => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.err,
          color: colors.white,
        });
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxHeight: 200, maxWidth: 200},
      response => {
        // console.log('response: ', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'oops, sepertinya anda tidak memilih photo?',
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
        } else {
          // console.log('response getImage: ', response);
          const source = {uri: response.uri};

          setPhotoForDB(`data:${response.type};base64, ${response.data}`);
          setPhoto(source);
        }
      },
    );
  };
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Gap height={10} />
          <Profile isRemove photo={photo} onPress={getImage} />
          <Gap height={26} />
          <InputText
            label="Full Name"
            value={profile.fullName}
            onChangeText={value => changeText('fullName', value)}
          />
          <Gap height={24} />
          <InputText
            label="Pekerjaan"
            value={profile.profesi}
            onChangeText={value => changeText('profesi', value)}
          />
          <Gap height={24} />
          <InputText
            label="Email Address"
            value={profile.emailAddress}
            disable
          />
          <Gap height={24} />
          <InputText
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
