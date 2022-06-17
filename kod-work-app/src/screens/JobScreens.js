import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Jobs from './Jobs/Jobs';
import JobDetail from './JobDetail/JobDetail';

const Stack = createStackNavigator();

const JobScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Jobs',
          headerStyle: {backgroundColor: 'orange'},
          headerTitleStyle: {color: 'white'},
          headerTitleAlign: 'center',
        }}
        name={'JobsScreen'}
        component={Jobs}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {backgroundColor: 'orange'},
          headerTitleStyle: {color: 'white'},
          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
        name={'JobDetail'}
        component={JobDetail}
      />
    </Stack.Navigator>
  );
};
export default JobScreens;
