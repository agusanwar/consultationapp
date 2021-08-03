import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/colors';
import {IcEditProfile, IcHelp, IcLanguage, IcNext, IcRate} from '../../assets';

const List = ({profile, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IcEditProfile />;
    }
    if (icon === 'language') {
      return <IcLanguage />;
    }
    if (icon === 'rate') {
      return <IcRate />;
    }
    if (icon === 'help') {
      return <IcRate />;
    }
    return <IcEditProfile />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IcNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: 'Nunito-Light',
    color: colors.text.secondary,
  },
});
