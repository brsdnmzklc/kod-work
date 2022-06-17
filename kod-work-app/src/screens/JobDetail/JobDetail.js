import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './JobDetail.style';
import RenderHtml from 'react-native-render-html';
import Button from '../../components/Button/Button';

const JobDetail = ({route}) => {
  const item = route.params.data;
  const location = item.locations[0].name;
  const company = item.company.name;
  const content = {html: item.contents};
  const level = item.levels[0].name;
  const width = Dimensions.get('window');
  const dispatch = useDispatch();

  const addFav = () => {
    dispatch({
      type: 'ADD_FAVORITES',
      payload: {
        job: item.name,
        company: company,
        location: location,
        level: level,
        id: item.id,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.job}>{item.name}</Text>
        <Text style={styles.location}>
          <Text style={styles.inlineLocation}>Locations</Text> : {location}
        </Text>
        <Text style={styles.level}>
          <Text style={styles.inlineLevel}>Job Level</Text> : {level}
        </Text>
        <View style={styles.jobDetailHeader}>
          <Text style={styles.jobDetail}>JOB DETAIL</Text>
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <RenderHtml contentWidth={width} source={content} />
        </ScrollView>
      </View>
      <View style={styles.buttons}>
        <Button title="Submit" icontitle="exit-to-app" />
        <Button title="Favorite Job" icontitle="heart" onPress={addFav} />
      </View>
    </View>
  );
};

export default JobDetail;
