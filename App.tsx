import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './component/Page/Home';
// import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return <>
  {/* <Text>Hello World</Text> */}
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  </NavigationContainer>
  </>;
};

export default App;

const styles = StyleSheet.create({});
