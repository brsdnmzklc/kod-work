import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width / 2.5,
    height: height / 15,
    backgroundColor: 'orange',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});
