import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppProvider from './src/context/Provider';
import JobScreens from './src/screens/JobScreens';
import FavoritedJobs from './src/screens/FavoritedJobs/FavoritedJobs';

const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen name={'Jobs'} component={JobScreens} />
          <Drawer.Screen name={'Favorited Jobs '} component={FavoritedJobs} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default Router;
