import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListMentor} from '../components';
import {colors} from '../utils/colors';
import {DummyAnwar} from '../assets/dummy';

const Message = ({navigation}) => {
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
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
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
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.black,
    flex: 1,
  },

  content: {
    backgroundColor: colors.primary,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
