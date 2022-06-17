import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 160,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    margin: 8,
    padding: 7,
  },
  bodyContainer: {
    height: 100,
    alignItems: 'flex-start',
  },
  job: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    margin: 3,
  },
  company: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    margin: 3,
  },
  locationContainer: {
    maxWidth: 170,
    minHeight: 40,
    backgroundColor: 'orange',
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: 8,
    alignItems: 'center',
    margin: 3,
  },
  location: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  levelContainer: {
    alignItems: 'flex-end',
  },
  level: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange',
  },
});
