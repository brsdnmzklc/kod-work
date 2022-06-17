import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {flex: 1},
  header: {
    height: height / 4,
    marginVertical: 10,
    padding: 10,
  },
  job: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  location: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  level: {fontSize: 15, fontWeight: '500', color: 'black'},
  inlineLocation: {fontSize: 15, fontWeight: '500', color: 'orange'},
  inlineLevel: {fontSize: 15, fontWeight: '500', color: 'orange'},
  body: {height: height / 2, flex: 2},
  buttons: {flex: 0.5, flexDirection: 'row', justifyContent: 'space-evenly'},
  jobDetailHeader: {
    height: height / 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobDetail: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
