import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../Button/Button';
import styles from './FavoriteJobCard.style';
import {useDispatch} from 'react-redux';

const FavoriteJobCard = ({item}) => {
  const dispatch = useDispatch();
  console.log(item.id);
  const removeFav = () => {
    dispatch({type: 'REMOVE_FAVORITES', payload: item.id});
  };
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.job}>{item.job}</Text>
        <Text style={styles.company}>{item.company}</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </View>
      <View style={styles.levelContainer}>
        <Text style={styles.level}>{item.level}</Text>
        <Button title="Remove" icontitle="delete" onPress={removeFav} />
      </View>
    </View>
  );
};

export default FavoriteJobCard;
