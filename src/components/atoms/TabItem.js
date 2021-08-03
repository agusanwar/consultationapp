import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IcAccountActive,
  IcAccount,
  IcHomeActive,
  IcHome,
  IcMessageActive,
  IcMessage,
} from '../../assets';
import {colors} from '../../utils/colors';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IcHomeActive /> : <IcHome />;
    }
    if (title === 'Message') {
      return active ? <IcMessageActive /> : <IcMessage />;
    }
    if (title === 'Account') {
      return active ? <IcAccountActive /> : <IcAccount />;
    }
    return <IcHome />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  text: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
  }),
});
