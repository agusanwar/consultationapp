import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Header, Gap, InputText, Button, Loading} from '../components';
import {colors, getData, storeData, useForm} from '../utils';
import {Fire} from '../config';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profesi: '',
    emailAddress: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    setLoading(true);
    //Objek configurasi firebase manual
    Fire.auth()
      .createUserWithEmailAndPassword(form.emailAddress, form.password)
      //Fungsi Succes
      .then(success => {
        setLoading(false);
        setForm('reset');
        //https://firebase.com/users/id(12233)
        const data = {
          fullName: form.fullName,
          profesi: form.profesi,
          emailAddress: form.emailAddress,
          uid: success.user.uid,
        };
        //untuk update di database
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);
        //untuk menyimpan di localstorage
        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
        // console.log('register success: ', success);
      })
      //Fungsi Error
      .catch(error => {
        const errorMessage = error.message;
        setLoading(false);
        //show message
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
        // console.log('error: ', error);
      });
  };
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Sign Up" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <InputText
            label="Full Name"
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={24} />
          <InputText
            label="Pekerjaan"
            value={form.profesi}
            onChangeText={value => setForm('profesi', value)}
          />
          <Gap height={24} />
          <InputText
            label="Email Address"
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
          <Button
            title="Continue"
            onPress={onContinue}
            // onPress={() => navigation.navigate('UploadPhoto')}
          />
          <Gap height={60} />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 40,
  },
});
