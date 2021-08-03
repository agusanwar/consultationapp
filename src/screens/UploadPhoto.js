import React, {useState} from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import {IcAddPhoto, IcRemovePhoto, IlNullPhoto} from '../assets';
import {Header, Button, Gap, Link} from '../components';
import {colors} from '../utils/colors';
import * as ImagePicker from 'react-native-image-picker'; // * as solution
import {showMessage} from 'react-native-flash-message';
import {Fire} from '../config';
import {storeData} from '../utils';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profesi, uid} = route.params;
  //test for create parameters in signup
  // console.log('fullName: ', fullName);
  // console.log('profesi: ', profesi);

  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoForDB, setPhotoForDB] = useState('');
  const [photo, setPhoto] = useState(IlNullPhoto);
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
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    Fire.database().ref(`users/${uid}/`).update({photo: photoForDB});

    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data);

    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IcRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IcAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{profesi}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <Gap height={40} />
          <Link
            title="Skip for this"
            align="center"
            fontSize={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },

  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },

  name: {
    marginTop: 20,
    fontSize: 26,
    color: colors.text.primary,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },

  profession: {
    fontSize: 18,
    fontFamily: 'Nunito-ExtraLight',
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4,
  },
});
