import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './FavoritedJobs.style';
import {useSelector} from 'react-redux';
import FavoriteJobCard from '../../components/Cards/FavoriteJobCard/FavoriteJobCard';

const FavoritedJobs = () => {
  const favorites = useSelector(s => s.favorites);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({item}) => {
          return <FavoriteJobCard item={item} />;
        }}
      />
    </View>
  );
};

export default FavoritedJobs;
