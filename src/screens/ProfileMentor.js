import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Profile, Button, ProfileItem, Gap} from '../components';
import {colors} from '../utils/colors';

const ProfileMentor = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profesi: '',
  });
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Agus Anwar" desc="Mobile Developer" />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value="Stmik Insan Pembangunan" />
      <ProfileItem label="Specialist" value="Website Developer" />
      <View style={styles.border}>
        <Gap height={20} />
        <Button
          title="Start Cosultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
      <Gap height={10} />
    </View>
  );
};

export default ProfileMentor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  border: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
