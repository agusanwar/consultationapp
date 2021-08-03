import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlLogo} from '../assets';
import {Fire} from '../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubcribe = Fire.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          //user sedang login
          // console.log('user: ', user);
          navigation.replace('MainApp');
        } else {
          //user logout
          navigation.replace('GetStarted');
        }
      }, 2500);
    });
    return () => unsubcribe();
  }, []);
  return (
    <View style={styles.page}>
      <IlLogo />
      <View style={{height: 15}} />
      <Text style={styles.text}>TutorPedia App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1F1D2B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 32,
    color: '#FFCC00',
  },
});
