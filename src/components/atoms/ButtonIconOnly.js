import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IcBackDark, IcBackLight} from '../../assets';

const ButtonIconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'left-arrow') {
      return <IcBackDark />;
    }
    if (icon === 'left-arrow-light') {
      return <IcBackLight />;
    }
    return <IcBackDark />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default ButtonIconOnly;
