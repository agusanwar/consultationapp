import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IlGetStarted, IlStarted} from '../assets';
import {Gap} from '../components';
import {colors} from '../utils/colors';

//vector freepix image
<a href="https://storyset.com/work">Illustration by Freepik Storyset</a>;

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <IlStarted />
        <Text style={styles.textWelcome}>Welcome</Text>
        <Text style={styles.text}>to TutorPedia App</Text>
        <Text style={styles.textDesc}>
          Consultation made easier and more flexible
        </Text>
        <Gap height={20} />
        <Gap />
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <View style={styles.containerButton}>
            <Text style={styles.textButton}> Let' Go</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#2B2937',
    justifyContent: 'space-between',
  },

  container: {
    padding: 40,
  },

  textWelcome: {
    fontSize: 32,
    fontFamily: 'Nunito-Bold',
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 50,
  },

  text: {
    fontSize: 32,
    fontFamily: 'Nunito-Bold',
    fontWeight: '600',
    color: '#FFFFFF',
  },

  textDesc: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: 'grey',
    marginTop: 10,
  },
  containerButton: {
    backgroundColor: '#6610f2',
    height: 40,
    width: 120,
    borderRadius: 20,
  },
  textButton: {
    marginTop: 10,
    marginLeft: 20,
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
  },
  image: {
    flex: 1,
    marginTop: 20,
  },
});
