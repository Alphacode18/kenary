import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/screens/containers/Home';
import SeeAll from '../src/screens/SeeAll';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='See All'
        component={SeeAll}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
