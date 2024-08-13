import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './component/Page/Home';
import Division from './component/Page/Division';
import Subject from './component/Page/Subject';
import RollCall from './component/Page/RollCall';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return <>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Division" component={Division}/>
      <Stack.Screen name="Subject" component={Subject}/>
      <Stack.Screen name="rollCall" component={RollCall}/>

    </Stack.Navigator>
  </NavigationContainer>
  </>;
};

export default App;

const styles = StyleSheet.create({});
