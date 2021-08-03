import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {InputText, Gap, Button, Link} from '../components';
import {colors} from '../utils/colors';
import {IlLogo} from '../assets';
import {showError, storeData, useForm} from '../utils';
import {Fire} from '../config';
import {useDispatch} from 'react-redux';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({emailAddress: '', password: ''});
  //variable dispatch
  const dispatch = useDispatch();

  const login = () => {
    // console.log('form: ', form);
    dispatch({type: 'SET_LOADING', value: true});
    Fire.auth()
      .signInWithEmailAndPassword(form.emailAddress, form.password)
      .then(res => {
        // console.log('success: ', res);
        dispatch({type: 'SET_LOADING', value: false});
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value') //manggil to database 1 persons
          .then(resDB => {
            // console.log('data user: ', resDB.val());
            //get data from data local storage
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(err => {
        // console.log('error: ', err);
        dispatch({type: 'SET_LOADING', value: false});
        //flash message eror
        showError(err.message);
      });
  };

  // const showLoadingTemp = () => {
  //   //diapatch berfungsi untuk merubah reducer
  //   dispatch({type: 'SET_LOADING', value: true});
  // };
  return (
    <ScrollView>
      <View style={styles.page}>
        <IlLogo style={styles.image} />
        <Text style={styles.title}>Sign To Continue</Text>
        <InputText
          label="Email Addres"
          value={form.emailAddress}
          onChangeText={value => setForm('emailAddress', value)}
        />
        <Gap height={24} />
        <InputText
          label="Password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={40} />
        <Button styles={styles.button} title="Sign In" onPress={login} />
        <Gap height={30} />
        <Link
          title="Don't have an Account ? SignUp Here"
          size={16}
          align="center"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Gap height={160} />
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.primary,
    flex: 1,
  },
  image: {
    marginTop: 70,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Nunito-SemiBold',
    color: colors.white,
    marginTop: 20,
    marginBottom: 30,
    maxWidth: 153,
  },
});
