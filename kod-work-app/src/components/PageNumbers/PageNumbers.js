import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './PageNumbers.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PageNumberCard = ({pageNumber, handlePageNumber}) => {
  return pageNumber ? (
    <View style={styles.icons}>
      <TouchableOpacity onPress={() => handlePageNumber(-1)}>
        <Icon name="chevron-left" size={40} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePageNumber(1)}>
        <Icon name="chevron-right" size={40} />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.icon}>
      <TouchableOpacity onPress={() => handlePageNumber(1)}>
        <Icon name="chevron-right" size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default PageNumberCard;
