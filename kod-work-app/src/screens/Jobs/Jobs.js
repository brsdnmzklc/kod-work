import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './Jobs.style';
import JobCard from '../../components/Cards/JobCard/JobCard';
import PageNumbers from '../../components/PageNumbers/PageNumbers';
import Config from 'react-native-config';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';

const Jobs = ({navigation}) => {
  const [pageNumber, setPageNumber] = useState(0);
  const {error, loading, responseData} = useFetch(
    Config.API_JOBS_URL,
    pageNumber,
  );

  if (error) {
    <Error />;
  }

  const handlePageNumber = int => {
    setPageNumber(pageNumber + int);
  };
  const handleJobDetail = data => {
    navigation.navigate('JobDetail', {data: data});
  };

  const renderJobs = ({item}) => (
    <JobCard item={item} onPress={handleJobDetail} />
  );
  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <FlatList data={responseData.results} renderItem={renderJobs} />
      <PageNumbers
        pageNumber={pageNumber}
        handlePageNumber={handlePageNumber}
      />
    </View>
  );
};

export default Jobs;
