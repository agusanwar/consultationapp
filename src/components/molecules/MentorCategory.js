import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/colors';
import {IlFigma, IlLaravel, IlFlutter, IlNode, IlReact} from '../../assets';

const MentorCategory = ({category, name, onPress}) => {
  const Icon = () => {
    if (category === 'Mobile App') {
      return <IlReact style={styles.illustator} />;
    }
    if (category === 'Website Developer') {
      return <IlLaravel style={styles.illustatorLaravel} />;
    }
    if (category === 'Backend Developer') {
      return <IlNode style={styles.illustatorNode} />;
    }
    if (category === 'UI Design') {
      return <IlFigma style={styles.illustatorFigma} />;
    }
    if (category === 'Flutter Developer') {
      return <IlFlutter style={styles.illustatorFlutter} />;
    }
    return <IlReact style={styles.illustator} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{name}</Text>
      <Icon />
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default MentorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  illustator: {
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 13,
  },
  illustatorLaravel: {
    marginLeft: 23,
    marginTop: 15,
    marginBottom: 10,
  },
  illustatorNode: {
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  illustatorFigma: {
    marginLeft: 22,
    marginTop: 15,
    marginBottom: 15,
  },
  illustatorFlutter: {
    marginLeft: 18,
    marginTop: 15,
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    fontFamily: 'Nunito-Light',
    color: colors.text.tertiary,
    textAlign: 'center',
  },
  category: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.tertiary,
    textAlign: 'center',
  },
});
