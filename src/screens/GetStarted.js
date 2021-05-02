import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlGetStarted} from '../assets';

//vector freepix image
<a href="https://storyset.com/work">Illustration by Freepik Storyset</a>;

const GetStarted = () => {
  return (
    <View style={styles.page}>
      <Text>Welcome</Text>
      <Text>to Solution App</Text>
      <Text>
        Solusi untuk mengembangkan bisnis anda jadi lebih mudah dan flexible di
        Solution App
      </Text>
      <View>
        <IlGetStarted />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
