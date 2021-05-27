import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {IlGetStarted, IlStarted, IlWaves} from '../assets';
import {Button, Gap} from '../components/atoms';

//vector freepix image
<a href="https://storyset.com/work">Illustration by Freepik Storyset</a>;

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlStarted />
      <Text style={styles.textWelcome}>Welcome</Text>
      <Text style={styles.text}>to Solution App</Text>
      <Text style={styles.textDesc}>
        Solusi untuk mengembangkan bisnis anda jadi lebih mudah dan flexible di
        Solution App
      </Text>
      <Gap height={20} />
      <Button title="Lets go" onPress={() => navigation.navigate('SignIn')} />
      <View style={styles.image}>
        <IlGetStarted />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  textWelcome: {
    fontSize: 32,
    fontFamily: 'Nunito-Bold',
    fontWeight: '600',
    color: 'black',
    marginTop: 50,
  },

  text: {
    fontSize: 32,
    fontFamily: 'Nunito-Bold',
    fontWeight: '600',
    color: 'black',
  },

  textDesc: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: 'grey',
    marginTop: 10,
  },

  image: {
    marginBottom: 40,
  },
});
