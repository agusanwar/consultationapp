import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../components';
import {ListMentor} from '../components';
import {DummyAnwar} from '../assets/dummy';
import {colors} from '../utils/colors';

const ChooseMentor = ({navigation}) => {
  const [mentors, setMentors] = useState([
    {
      id: 1,
      profile: DummyAnwar,
      name: 'Alexandre Jannie',
      desc: 'Baik bu, terima kasih atas waktunya',
    },
    {
      id: 2,
      profile: DummyAnwar,
      name: 'Nairobyi Putri hayza',
      desc: 'Oh tentu saja tidak karna itu bu',
    },
    {
      id: 3,
      profile: DummyAnwar,
      name: 'John McPacker Steve',
      desc: 'Ok menurut docket bagaimana untuk semuanya ?',
    },
  ]);
  return (
    <View style={styles.page}>
      <Header title="Choose Mentor" onPress={() => navigation.goBack()} />
      {mentors.map(mentor => {
        return (
          <ListMentor
            key={mentor.id}
            profile={mentor.profile}
            name={mentor.name}
            desc={mentor.desc}
            onPress={() => navigation.navigate('Chatting')}
          />
        );
      })}
    </View>
  );
};

export default ChooseMentor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
});
