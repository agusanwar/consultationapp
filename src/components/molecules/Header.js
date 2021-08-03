import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {IcBackLight} from '../../assets/icon';
import {colors} from '../../utils/colors';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.back}>
          <IcBackLight onPress={onPress} />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.secondary,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
  },

  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: colors.secondary,
    marginLeft: 20,
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
});
