import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {colors} from '../../utils/colors';
import {Gap} from '../atoms';

const NewsItem = ({image, date, title, body}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Gap height={10} />
        <Text style={styles.title}>{body}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primary,
    maxWidth: '80%',
  },
  titleWrapper: {
    flex: 1,
  },
  date: {
    fontSize: 12,
    fontFamily: 'Nunito-ExtraLight',
    color: colors.text.secondary,
    marginTop: 4,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 11,
    marginTop: 10,
  },
});
