import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Button.style';

const Button = ({title, icontitle, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <Icon name={icontitle} size={40} color="white" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
