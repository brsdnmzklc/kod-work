import React from 'react';
import {Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from './JobCard.style';

const JobCard = ({item, onPress}) => {
  const location = item.locations[0].name;
  const company = item.company.name;
  const level = item.levels[0].name;

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => onPress(item)}>
      <View style={styles.bodyContainer}>
        <Text style={styles.job}>{item.name}</Text>
        <Text style={styles.company}>{company}</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
      <View style={styles.levelContainer}>
        <Text style={styles.level}>{level}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
